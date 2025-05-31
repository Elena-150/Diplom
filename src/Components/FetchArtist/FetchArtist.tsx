import { useEffect, useState } from "react";
import "./FetchArtist.css";

interface Artist {
    name: string;
    listeners: string;
    image_url: string;
}

const Artists = ({query}: { query: string | null }) => {
    const [artists, setArtists] = useState<Artist[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        if (!query) {
            setArtists([]);
            return;
        }

        const fetchArtists = async () => {
            setIsLoading(true);

            const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${query}&api_key=f7650306935ea134c69489f12271bdd7&limit=8&format=json`);

            const data = await response.json();

            if (!data?.results?.artistmatches?.artist) {
                setArtists([]);
                return;
            }

            const streamArtists = data.results.artistmatches.artist.map((artist: any) => {
                const image = artist.image?.find((img: any) => img.size === 'extralarge')
                return {
                    name: artist.name,
                    listeners: artist.listeners,
                    image_url: image?.["#text"] || 'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png'
                };
            });

            setArtists(streamArtists);
            setIsLoading(false);
        }

        fetchArtists();
    }, [query]);

    if (isLoading) return <div>Loading...</div>;

    return (
        <section className="artists-section">
            <h2 className="section-title">Artists</h2>
            <ol className="artists-list">
                {artists.length > 0 ? (
                    artists.map((artist, index) => (
                        <li key={`${artist.name}-${index}`} className="artist-card">
                            <div
                                className="artist-image-container"
                                style={{ backgroundImage: `url(${artist.image_url})` }}
                            >
                                <div className="artist-info">
                                    <h3 className="artist-name">{artist.name}</h3>
                                    <p className="artist-listeners">
                                        {artist.listeners} listeners
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))
                ) : (
                    <p className="no-results">No artists found.</p>
                )}
            </ol>
        </section>
    );
}

export default Artists;