import { useEffect, useState } from "react";
import Header from "./Header";

export default function films(props) {
  const {
    films,
    filteredFilms,
    setFilmToReview,
    hideForm,
    setHideForm,
    searchInput,
    setSearchInput,
    user,
    genre,
    setFilms,
    resetFilms,
    setResetFilms,
  } = props;

  return (
    <>
      <h3>Films</h3>
      <button ClassName="click-button" onClick={() => {}}>
        Clean selection
      </button>
      <ul className="responsive-grid">
        {filteredFilms.map((film, index) => {
          const { id, genre, name, image } = film;
          return (
            <li key={index}>
              <div className="container poster-container">
                <img src={image} alt={name} />
                <button
                  className="btn"
                  onClick={() => {
                    setFilmToReview(film);
                    setHideForm(!hideForm);
                  }}
                >
                  {hideForm ? "Select" : "Select"}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
