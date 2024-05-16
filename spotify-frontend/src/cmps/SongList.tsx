import { useEffect, useState } from 'react';
import { youtubeService } from '../services/youtube.service';
import { Song, SongListProps } from '../types';
function parseISO8601Duration(duration: any) {
    console.log(duration);
    
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    const hours = parseInt(match[1]) || 0;
    const minutes = parseInt(match[2]) || 0;
    const seconds = parseInt(match[3]) || 0;
    return `${hours ? `${hours}:` : ''}${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

export function SongList({ songs }: SongListProps) {
    const [detailedSongs, setDetailedSongs] = useState<Song[]>([]);

    useEffect(() => {
        const fetchVideoDetails = async () => {
            if (songs.length === 0) return;
            const ids = songs.map(song => song.id && song.id.videoId).filter(id => id != null);         
            try {
                const items = await youtubeService.getVideoDetails(ids); 
            
                const details = items.reduce((acc : any, item : any) => {
                    acc[item.id] = parseISO8601Duration(item.contentDetails.duration);
                    return acc;
                }, {});
            
                const updatedSongs = songs.map(song => ({
                    ...song,
                    duration: details[song.id.videoId] || 'N/A'  
                }));
                setDetailedSongs(updatedSongs);
            } catch (error) {
                console.error('Failed to fetch song details:', error);
            }
        };

        fetchVideoDetails();
    }, [songs]);

    return (
        <div className="song-list">
            <h1>Poplur</h1>
            {detailedSongs.map((song, index) => (
                <div key={index} className="song-item">
                    <section>
                        <img src={song.snippet.thumbnails.medium.url} alt={song.snippet.title} className="song-thumbnail" />
                        <div className="song-title">{song.snippet.title}</div>
                    </section>
                    <div className="song-date">{new Date(song.snippet.publishedAt).toLocaleDateString()}</div>
                    <div className="song-duration">{song.duration ? song.duration : ''}</div>
                </div>
            ))}
        </div>
    );
}
