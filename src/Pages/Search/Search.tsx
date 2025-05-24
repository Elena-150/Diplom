import "./Search.css";
import Artists from "../../Components/FetchArtist/FetchArtist";
import Albums from "../../Components/FetchAlbum/FetchAlbum";
import Tracks from "../../Components/FetchTrack/FetchTrack";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Search = () => {
    const [query, setQuery] = useState<string>('');
    const [inputValue, setInputValue] = useState('');
    const location = useLocation();

    // Извлекаем query из URL при монтировании компонента
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const urlQuery = searchParams.get('query');
        if (urlQuery) {
            setQuery(decodeURIComponent(urlQuery));
            setInputValue(decodeURIComponent(urlQuery));
        }
    }, [location.search]);

    const handleClear = () => {
        setQuery("");
        setInputValue("");
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setQuery(inputValue.trim());
    };

    return (
        <main className="main-view__sections">
            <section>
                <div className="root__main-view">
                    <div className="root__main-spacer">
                        <div className="Search">
                            <form className="search_form" onSubmit={handleSubmit}>
                                <input 
                                    type="text" 
                                    placeholder="Поиск" 
                                    value={inputValue}
                                    onChange={handleInputChange}
                                />
                                <Link 
                                    to={`/search?query=${encodeURIComponent(inputValue.trim())}`} 
                                    className={`search-button ${!inputValue.trim() ? "disabled" : ""}`} 
                                    onClick={(e) => {
                                        if (!inputValue.trim()) {
                                            e.preventDefault();
                                        } else {
                                            setQuery(inputValue.trim());
                                        }
                                    }}
                                >
                                    <svg height="24" width="24" viewBox="0 0 24 24">
                                        <path fill="#000"
                                            d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 101.414-1.414l-4.344-4.344a9.157 9.157 0 002.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z">
                                        </path>
                                    </svg>
                                </Link>
                                {inputValue && (
                                    <button 
                                        type="button" 
                                        className="clear-button" 
                                        onClick={handleClear}
                                    >
                                        ×
                                    </button>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            
            {query && (
                <>
                    <section>
                        <h4 className="h4-text">Search results</h4>
                    </section>
                    <section>
                        <Artists query={query} />
                        <div className="text_more">More artists &gt;</div>
                    </section>
                    <section>
                        <Albums query={query} />
                        <div className="text_more">More albums &gt;</div>
                    </section>
                    <section>
                        <Tracks query={query} />
                        <div className="text_more">More tracks &gt;</div>
                    </section>
                </>
            )}
        </main>
    );
}

export default Search;