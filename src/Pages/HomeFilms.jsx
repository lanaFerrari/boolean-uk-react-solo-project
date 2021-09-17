import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import Header from "./Components/Header";

export default function HomeFilms(props) {
  const { reviews, user, films } = props;
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <Header
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        user={user}
      />
      <main className="margins three-c-grid">
        <div>
          <h3>Categories</h3>
          <ul>
            {films.map((film, index) => {
              const { id, genre, name, image } = film;
              return (
                <li key={index}>
                  <input type="checkbox" id={genre} name={genre} />
                  <label forhtml="scales">{genre}</label>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h1>Reviews</h1>
          <form action=""></form>
        </div>
        <div>
          <h3>Films</h3>
          <ul>
            {films.map((film, index) => {
              const { id, genre, name, image } = film;
              return (
                <li key={index} className="gap">
                  <div className="poster-container gap">
                    <img src={image} alt={name} />
                  </div>
                  {/* <h4>{name}</h4> */}
                  <Button variant="outlined">Review this film</Button>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </>
  );
}
