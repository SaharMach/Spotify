import { useState } from "react"

export function Artists() {
    const play = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
    
    const artists = [
        {
            name: 'Omer Adam',
            photo: 'https://i.scdn.co/image/ab67616100005174628f9f1c11def0f11b06ab7d',
            title: 'Artist'
        },
        {
            name: 'Eden Hason',
            photo: 'https://i.scdn.co/image/ab676161000051748d9e30e6bbc36be6bcec3499',
            title: 'Artist'
        },
        {
            name: 'Tuna',
            photo: 'https://i.scdn.co/image/ab67616100005174e6b8f92cadb785fd926be403',
            title: 'Artist'
        }
        ,
        {
            name: 'Eyal Golan',
            photo: 'https://i.scdn.co/image/ab6761610000517470cddfcd7623a861f233e159',
            title: 'Artist'
        },
        {
            name: 'Noa Kirel',
            photo: 'https://i.scdn.co/image/ab676161000051744ccf8fdc61a1372c40bd2c11',
            title: 'Artist'
        },
        {
            name: 'Osher Cohen',
            photo: 'https://i.scdn.co/image/ab67616100005174554feee7ced67d9bbba0c8cb',
            title: 'Artist'
        },
        {
            name: 'Ravid Plotink',
            photo: 'https://i.scdn.co/image/ab67616100005174bd0a9110c01c547407bfd1b9',
            title: 'Artist'
        },
        {
            name: 'Hanan Ben Ari',
            photo: 'https://i.scdn.co/image/ab67616100005174651ab62ce2d9e5baf6e485e5',
            title: 'Artist'
        },
        {
            name: 'Odeya',
            photo: 'https://i.scdn.co/image/ab676161000051747bb9c1cc7e73c8e60c5b568c',
            title: 'Artist'
        }
    
    ]

    return (
        <>
            <h1>Artists</h1>
            <div className="playlist-cards">
            {artists.map((artist, index) => (
                <div className='playlist-card' key={index}>
                    <div className='card-layout'>
                        <span>
                            {play}
                        </span>
                    </div>
                    <img style={{borderRadius: '50%'}} src={artist.photo} alt={artist.title} />
                    <section className='playlist-desc'>

                        <p>{artist.name}</p>
                        <span>{artist.title}</span>
                    </section>
                </div>
            ))}
            </div>
        </>
    )
        
}