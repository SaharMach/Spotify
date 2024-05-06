import { useState } from 'react';
import { Playlists } from './Playlists';
import { Artists } from './Artists';
import { ArtistItem } from '../types';

export function HomeStation() {
    const [selectedArtist, setSelectedArtist] = useState<ArtistItem>();

    const handleArtistSelection = (artist: ArtistItem) => {
        setSelectedArtist(artist);
    };

    return (
        <div className='playlist-con'>
            <Artists onArtistSelected={handleArtistSelection} />
            {!selectedArtist && <Playlists />}
        </div>
    );
}