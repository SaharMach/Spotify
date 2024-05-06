import{ useEffect, useState } from 'react';
import { PlaylistItem } from '../types';
// import { SearchResponse } from '../types';
import { youtubeService } from '../services/youtube.service';

export function Playlists() {
    const [playlists, setPlaylists] = useState<PlaylistItem[]>([]);
    const play = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
    const [chosenPlaylist, setChosenPlaylist] = useState<PlaylistItem>()

    
    useEffect(() => {
        const fetchPlaylists = async () => {
            try {
                const response = await youtubeService.fetchDataFromAPI('playlists', 'top playlists in israel')
                setPlaylists(response);
            } catch (error) {
                console.error('Error fetching playlists:', error);
            }
        };

        fetchPlaylists();
    }, []);
    
    return (
        <div className='playlist-con'>
            
            <h1>Spotify playlist</h1>
            <section className='playlist-cards'>

            {!chosenPlaylist && playlists.map((playlist, index) => (
                 <div onClick={() => setChosenPlaylist(playlist)} className='playlist-card' key={index}>
                    <div className='card-layout'>
                        <span>
                            {play}
                        </span>
                    </div>
                    <img src={playlist.snippet.thumbnails.medium.url} alt={playlist.snippet.title} />
                    <section className='playlist-desc'>

                        <p>{playlist.snippet.title}</p>
                        <span>{playlist.snippet.description}</span>
                    </section>
                </div>
            ))}
            </section>
        </div>
    );
}
