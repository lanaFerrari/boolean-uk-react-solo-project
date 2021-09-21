import { useEffect, useState } from "react";
import "./styles.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import HomeFilms from "./Pages/HomeFilms";

export default function App() {
  // APis
  const [films, setFilms] = useState([]);
  const [reviews, setReviews] = useState([]);

  //Data for Genres
  const [filmsGenres, setFilmsGenres] = useState([]);

  //Data for films
  const [resetFilms, setResetFilms] = useState([]);

  // Hideforms
  const [hideForm, setHideForm] = useState(true);
  const [hideEdit, setHideEdit] = useState(true);
  const [hideDelete, setHideDelete] = useState(true);

  // Select items for CRUD
  const [filmToReview, setFilmToReview] = useState({});
  const [postToEdit, setPostToEdit] = useState({});
  const [postToDelete, setPostToDelete] = useState({});

  // User inputs
  const [user, setUser] = useState("");
  const [rating, setRating] = useState(null);
  const [search, setSearch] = useState("");

  //Filters
  const [genre, setGenre] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  // APIs
  useEffect(() => {
    const url = `http://localhost:3030/films`;
    fetch(url)
      .then((res) => res.json())
      .then((Data) => {
        setFilms(Data);
        setResetFilms(Data);
      });
  }, []);

  function extractGenres(films) {
    const genres = films.map((film) => film.genre);
    return [...new Set(genres)].sort();
  }

  useEffect(() => {
    const FilmGenres = extractGenres(films);

    setFilmsGenres(FilmGenres);
  }, [films]);

  useEffect(() => {
    const url = `http://localhost:3030/posts`;
    fetch(url)
      .then((res) => res.json())
      .then((Data) => {
        Data.sort();
        Data.reverse();

        setReviews(Data);
      });
  }, []);

  //Filter by search
  let filteredFilms = films;

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchInput(search);
    setSearch("");
  };

  if (searchInput !== "") {
    filteredFilms = films.filter((film) => {
      const filmName = film.name.toLowerCase();

      return searchInput.toLowerCase().includes(filmName.toLowerCase());
    });
  }

  // Filter by genre
  const handleCheckbox = (e) => {
    const isChecked = e.target.checked;
    const selectedGenre = e.target.value;

    const foundGenre = genre.find((tag) => tag === selectedGenre);

    if (isChecked) {
      setGenre([...genre, selectedGenre]);
    } else {
      const filteredCities = genre.filter((tag) => foundGenre !== tag);
      setGenre(filteredCities);
    }
  };

  if (genre.length > 0) {
    filteredFilms = films.filter((film) => {
      const filmGenre = film.genre;

      console.log("Genre", filmGenre);
      console.log("filteres films", filteredFilms);

      return genre.includes(filmGenre);
    });
  }

  return (
    <Switch>
      <Route exact path="/home-films">
        <HomeFilms
          reviews={reviews}
          user={user}
          films={films}
          filteredFilms={filteredFilms}
          filmsGenres={filmsGenres}
          setFilms={setFilms}
          setFilmToReview={setFilmToReview}
          filmToReview={filmToReview}
          hideForm={hideForm}
          setHideForm={setHideForm}
          setReviews={setReviews}
          hideEdit={hideEdit}
          setHideEdit={setHideEdit}
          hideDelete={hideDelete}
          setHideDelete={setHideDelete}
          genre={genre}
          setGenre={setGenre}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          rating={rating}
          setRating={setRating}
          postToEdit={postToEdit}
          setPostToEdit={setPostToEdit}
          postToDelete={postToDelete}
          setPostToDelete={setPostToDelete}
          handleCheckbox={handleCheckbox}
          search={search}
          setSearch={setSearch}
          handleInput={handleInput}
          handleSubmit={handleSubmit}
          resetFilms={resetFilms}
          setResetFilms={setResetFilms}
        />
      </Route>
      <Route exact path="/404">
        <NotFound />
      </Route>
      <Route path="/">
        <Home setUser={setUser} user={user} />
      </Route>
    </Switch>
  );
}
