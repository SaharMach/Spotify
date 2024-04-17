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

    useEffect(() => {
        const fetchPlaylists = async () => {
            try {
                const response = await axios.get<SearchResponse>('https://www.googleapis.com/youtube/v3/search', {
                    params: {
                        part: 'snippet',
                        maxResults: 10,
                        q: 'top playlists in Israel', 
                        type: 'playlist', 
                        key: '' //add api key here 
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
