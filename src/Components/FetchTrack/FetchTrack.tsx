import { useEffect, useState } from "react";
import "./FetchTrack.css";

interface Track {
    name: string;
    artist: string;
    image_url: string;
    duration: string;
}

const Tracks = ({ query }: { query: string | null }) => {

    const [tracks, setTracks] = useState<Track[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    function millisToMinutesAndSeconds(millis: string): string {
        const milliseconds = parseInt(millis);
        const minutes = Math.floor(milliseconds / 60000);
        const seconds = ((milliseconds % 60000) / 1000).toFixed(0);
        return seconds === "60"
            ? `${minutes + 1}:00`
            : `${minutes}:${seconds.padStart(2, "0")}`;
    }

    useEffect(() => {

        if (!query) {
            setTracks([]);
            return;
        }

        const fetchTrack = async () => {
            setIsLoading(true);

            const response = await fetch(
                `https://ws.audioscrobbler.com/2.0/?method=track.search&track=${query}&api_key=f7650306935ea134c69489f12271bdd7&limit=10&format=json`
            );

            const data = await response.json();

            const streamTrack = await Promise.all(
                data.results.trackmatches.track.map(async (track: any) => {
                    try {
                        const trackResponse = await fetch(
                            `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=f7650306935ea134c69489f12271bdd7&artist=${encodeURIComponent(
                                track.artist
                            )}&track=${encodeURIComponent(track.name)}&format=json`
                        );

                        const trackInfo = await trackResponse.json();

                        let trackDuration = "0";
                        if (trackInfo.track?.duration) {
                            trackDuration = trackInfo.track.duration;
                        }

                        const smallImage = track.image?.find(
                            (img: any) => img.size === "small"
                        );

                        return {
                            name: track.name,
                            artist: track.artist,
                            image_url:
                                smallImage?.["#text"] ||
                                "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
                            duration: millisToMinutesAndSeconds(trackDuration),
                        };
                    } catch (error) {
                        console.error("Ошибка при получении длительности:", error);
                        return null;
                    }
                })
            );

            setTracks(streamTrack.filter(Boolean));
            setIsLoading(false);
        };

        fetchTrack();
    }, [query]);

    if (isLoading) return <div>Loading...</div>;

    return (
        <section className="tracks-section">
            <h2 className="section-title">Tracks</h2>
            <ol className="tracks-list">
                {tracks.length > 0 ? (
                    tracks.map((track, index) => (
                        <li key={index} className="track-card">
                            <div
                                className="track-image"
                                style={{ backgroundImage: `url(${track.image_url})` }}
                            ></div>
                            <div className="track-info">
                                <h3 className="track-name">{track.name}</h3>
                                <p className="track-artist">{track.artist}</p>
                            </div>
                            <div className="track-duration">
                                <p className="track-time">{track.duration === "0:00" ? "" : track.duration}</p>
                            </div>
                        </li>
                    ))
                ) : (
                    <p className="no-results">No tracks found.</p>
                )}
            </ol>
        </section>
    );
};

export default Tracks;