import { useEffect, useState } from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Films from "./Components/Films";
import Form from "./Components/Form";
import Reviews from "./Components/Reviews";
import EditForm from "./Components/EditForm";
import DeleteForm from "./Components/DeleteForm";

export default function HomeFilms(props) {
  const {
    reviews,
    user,
    films,
    setFilmToReview,
    filmToReview,
    hideForm,
    setHideForm,
    setReviews,
    hideEdit,
    setHideEdit,
    hideDelete,
    setHideDelete,
  } = props;

  const [searchInput, setSearchInput] = useState("");
  const [rating, setRating] = useState(null);
  const [postToEdit, setPostToEdit] = useState({});
  const [postToDelete, setPostToDelete] = useState({});

  return (
    <>
      <Header
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        user={user}
      />
      <main>
        <Sidebar films={films} />
        <div className="content two-c-grid">
          <Films
            films={films}
            setFilmToReview={setFilmToReview}
            hideForm={hideForm}
            setHideForm={setHideForm}
          />
          <div>
            {!hideForm && (
              <Form
                filmToReview={filmToReview}
                user={user}
                setReviews={setReviews}
                reviews={reviews}
              />
            )}
            {!hideEdit && (
              <EditForm
                setReviews={setReviews}
                reviews={reviews}
                postToEdit={postToEdit}
                setPostToEdit={setPostToEdit}
              />
            )}
            {!hideDelete && (
              <DeleteForm
                postToDelete={postToDelete}
                setPostToDelete={setPostToDelete}
                setReviews={setReviews}
                reviews={reviews}
              />
            )}
            <Reviews
              reviews={reviews}
              rating={rating}
              setRating={setRating}
              hideEdit={hideEdit}
              setHideEdit={setHideEdit}
              hideDelete={hideDelete}
              setHideDelete={setHideDelete}
              postToEdit={postToEdit}
              setPostToEdit={setPostToEdit}
              postToDelete={postToDelete}
              setPostToDelete={setPostToDelete}
            />
          </div>
        </div>
      </main>
    </>
  );
}
