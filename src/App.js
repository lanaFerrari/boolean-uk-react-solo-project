import { useEffect, useState } from "react";
import "./styles.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import HomeFilms from "./Pages/HomeFilms";

export default function App() {
  const [films, setFilms] = useState([]);
  const [user, setUser] = useState("");
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const url = `http://localhost:3030/films`;
    fetch(url)
      .then((res) => res.json())
      .then((Data) => {
        setFilms(Data);
      });
  }, []);

  console.log(user);
  console.log("Films", films);

  return (
    <Switch>
      <Route exact path="/home-films">
        <HomeFilms reviews={reviews} user={user} films={films} />
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
