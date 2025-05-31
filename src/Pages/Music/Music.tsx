import { useEffect, useState } from "react";
import "./Music.css";
import PopularTrackList from '../../Components/PopularTrackList/PopularTrackList';

interface Artist {
    name: string;
    image_url: string;
    tags: string;
}


const Music = () => {

    const [popularArtist, setPopularArtist] = useState<Artist[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!isLoading) return;

        const fetchArtists = async () => {
            try {
                const response = await fetch(
                    "https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=f7650306935ea134c69489f12271bdd7&limit=12&format=json"
                );
                const data = await response.json();

                const artistPromises = data.artists.artist.map(async (artist: any) => {
                    try {
                        const tagsResponse = await fetch(
                            `https://ws.audioscrobbler.com/2.0/?method=artist.getTags&artist=${artist.name}&User=RJ&api_key=f7650306935ea134c69489f12271bdd7&format=json`
                        );
                        const tagsData = await tagsResponse.json();

                        let tagValue = "";

                        if (
                            tagsData.tags &&
                            Array.isArray(tagsData.tags.tag) &&
                            tagsData.tags.tag.length > 0
                        ) {
                            tagValue = tagsData.tags.tag[0].name || "";
                        }

                        const extralargeImage = artist.image.find(
                            (image: any) => image.size === "extralarge"
                        );

                        if (extralargeImage && extralargeImage["#text"]) {
                            return {
                                name: artist.name,
                                image_url: extralargeImage["#text"],
                                tags: tagValue,
                            };
                        } else {
                            return null;
                        }
                    } catch (error) {
                        console.error(
                            `Ошибка при получении тегов для ${artist.name}:`,
                            error
                        );
                        return null;
                    }
                });

                const artistsWithTags = (await Promise.all(artistPromises)).filter(
                    (artist) => artist !== null
                ) as Artist[];

                setPopularArtist(artistsWithTags);
            } catch (error) {
                console.error("Ошибка при получении списка артистов:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchArtists();
    }, [isLoading]);

    return (
        <div className="root__main-view">
            <main className="main-view__sections">
                <h2 className="h2-text">Music</h2>
                <section>
                    <h3 className="h3-text ">Hot right now</h3>
                    <div className="main-view__my-shows">
                        {popularArtist.map((artist, id) => (
                            <div key={id} className="my-shows__card">
                                <div className="card__image-container">
                                    <img loading="lazy" src={artist.image_url} alt="img" className="card__image" />
                                </div>
                                <div className="card__title-container">
                                    <div className="title-container__name-of-song">
                                        {artist.name}
                                    </div>
                                    <span className="title-container__tags">
                                        <p className="title-container__tag">{artist.tags}</p>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section>
                    <h3 className="h3-text">Popular tracks</h3>
                    <PopularTrackList />
                </section>
            </main>
        </div>
    )
}

export default Music;