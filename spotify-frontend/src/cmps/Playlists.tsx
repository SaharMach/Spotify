import{ useEffect, useState } from 'react';
import axios from 'axios';

interface PlaylistItem {
    id: {
        playlistId: string;
    },
    snippet: {
        title: string;
        description: string;
        thumbnails: {
            medium: {
                url: string;
            };
        };
    };
}

interface SearchResponse {
    items: PlaylistItem[];
}

export function Playlists() {
    const [playlists, setPlaylists] = useState<PlaylistItem[]>([]);
    const play = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
    useEffect(() => {
        const fetchPlaylists = async () => {
            try {
                const response = await axios.get<SearchResponse>('https://www.googleapis.com/youtube/v3/search', {
                    params: {
                        part: 'snippet',
                        maxResults: 10,
                        q: 'top playlists in Israel', 
                        type: 'playlist', 
                        key: '' 
                    }
                });
                setPlaylists(response.data.items);
            } catch (error) {
                console.error('Error fetching playlists:', error);
            }
        };

        fetchPlaylists();
    }, []);
    console.log(playlists);
    
    return (
        <div className='playlist-con'>
            
            <h1>Spotify playlist</h1>
            <section className='playlist-cards'>

            {playlists.map((playlist, index) => (
                <div className='playlist-card' key={index}>
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
