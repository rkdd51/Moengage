import "./styles.css";
import { useState, useEffect } from "react";
import AnimeCard from "./components/AnimeCard";

const animeAPI = "https://api.jikan.moe/v3/top/anime/1/bypopularity";
const animeSeacrh = "https://api.jikan.moe/v3/search/anime?q=";

export default function App() {
  const fetchAnime = async () => {};
  const [animes, setAnimes] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetch(animeAPI)
      .then((response) => response.json())
      .then((animes) => {
        setAnimes(animes.top);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.jikan.moe/v3/search/anime?=${searchValue}`)
      .then((response) => response.json())
      .then((animes) => {
        setAnimes(animes.results);
      });
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleClick = () => {
    let page = Math.floor(Math.random() * 367);
    fetch(`https://api.jikan.moe/v3/top/anime/${page}/bypopularity`)
      .then((response) => response.json())
      .then((animes) => {
        setAnimes(animes.top);
      });
  };

  return (
    <div className="App">
      <header className="search-bar">
        <button className="btn" onClick={handleClick}>
          Suprise-me
          <img
            style={{ width: "30px" }}
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_561191.png&f=1&nofb=1"
          ></img>
        </button>
        <form onSubmit={handleSubmit}>
          <div className="search-bar-input-bg">
            <button className="search-btn" type="submit">
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pinclipart.com%2Fpicdir%2Fbig%2F485-4851736_free-png-search-icon-search-icon-free-download.png&f=1&nofb=1"></img>
            </button>
            <input
              type="text"
              placeholder="Search Anime"
              value={searchValue}
              onChange={handleChange}
            />
          </div>
        </form>
      </header>

      <div className="animes-containers">
        {animes.map((anime) => {
          return <AnimeCard key={anime.mal_id} {...anime} />;
        })}
      </div>
    </div>
  );
}
