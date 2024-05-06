import { ArtistItem } from '../types'; 
import { useEffect, useState } from 'react';
import {youtubeService} from '../services/youtube.service.js'
import { SongList } from './SongList.js';

interface ArtistPageProps {
    artist: ArtistItem;
}

export function ArtistPage({ artist }: ArtistPageProps) {
    const viewsCount = ['1,148,478',  '2,115,233', '786,211', '991,216', '415,634', '1,526,784']
    const [songs, setSongs] = useState([])

    function getRandomIntInclusive(min: number, max: number) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1)) + min 
    }

    useEffect(() => {
        const getArtistSongs = async () => {
            try {
                let res = await youtubeService.fetchDataFromAPI('song', artist.name);
                setSongs(res)
            } catch (err) {
                console.log("err", err);
            }
        };

        getArtistSongs();
    }, [artist.name]); 
    return (
        <div className='artist-page'>
            <section className='details'>
                <span className='verified'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm34-102 102-44 104 44 56-96 110-26-10-112 74-84-74-86 10-112-110-24-58-96-102 44-104-44-56 96-110 24 10 112-74 86 74 84-10 114 110 24 58 96Zm102-318Zm-42 142 226-226-56-58-170 170-86-84-56 56 142 142Z"/></svg> 
                    <p>Verified Artist</p>
                </span>
                <span className='artist-name'>{artist.name}</span>
                <span className='views'>{viewsCount[getRandomIntInclusive(0, 5)]} monthly listeners</span>
            </section>
            <img src={artist.photo} alt={artist.name} />
            <SongList songs={songs} />
        </div>
    );
}
