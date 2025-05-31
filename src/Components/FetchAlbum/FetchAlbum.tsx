import { useState, useEffect } from "react";
import "./FetchAlbum.css";

interface Album {
    name: string;
    artist: string;
    image_url: string;
}

const Albums = ({query}: { query: string | null }) => {
    const [albums, setAlbums] = useState<Album[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        if (!query) {
            setAlbums([]);
            return;
        }

        const fetchAlbum = async () => {
            setIsLoading(true);
            const response = await fetch(
                `https://ws.audioscrobbler.com/2.0/?method=album.search&album=${query}&api_key=f7650306935ea134c69489f12271bdd7&limit=8&format=json`
            );

            const data = await response.json();


            const streamAlbum = data.results.albummatches.album.map(
                (album: any) => {
                    const extralargeImage = album.image?.find(
                        (img: any) => img.size === "extralarge"
                    );

                    return {
                        name: album.name,
                        artist: album.artist,
                        image_url:
                            extralargeImage?.["#text"] ||
                            "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                    };
                }
            );

            setAlbums(streamAlbum);
            setIsLoading(false);

        };

        fetchAlbum();
    }, [query]);

    if (isLoading) return <div>Loading...</div>;

    return (
        <section className="album-section">
            <h2 className="section-title">Album</h2>
            <ol className="album-list">
                {albums.length > 0 ? (
                    albums.map((album, index) => (
                        <li key={`${album.name}-${index}`} className="album-card">
                            <div
                                className="album-image-container"
                                style={{ backgroundImage: `url(${album.image_url})` }}
                            >
                                <div className="album-info">
                                    <h3 className="album-name">{album.name}</h3>
                                    <p className="album-artist">{album.artist}</p>
                                </div>
                            </div>
                        </li>
                    ))
                ) : (
                    <p className="no-results">No album found.</p>
                )}
            </ol>
        </section>
    );
};

export default Albums;