import { useEffect, useState } from "react";
import Sidebar from "./Components/Sidebar";
import Films from "./Components/Films";
import Form from "./Components/Form";
import Reviews from "./Components/Reviews";
import EditForm from "./Components/EditForm";
import DeleteForm from "./Components/DeleteForm";
import Header from "./Components/Header";

export default function HomeFilms(props) {
  const {
    reviews,
    user,
    films,
    setFilms,
    filmsGenres,
    setFilmToReview,
    filmToReview,
    hideForm,
    setHideForm,
    setReviews,
    hideEdit,
    setHideEdit,
    hideDelete,
    setHideDelete,
    genre,
    setGenre,
    searchInput,
    setSearchInput,
    rating,
    setRating,
    postToEdit,
    setPostToEdit,
    postToDelete,
    setPostToDelete,
    handleCheckbox,
    filteredFilms,
    search,
    setSearch,
    handleInput,
    handleSubmit,
    resetFilms,
    setResetFilms,
    problem,
    setProblem,
    array,
    setArray,
  } = props;

  return (
    <>
      <main>
        <Sidebar films={filmsGenres} onChange={handleCheckbox} />
        <Header
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          user={user}
          search={search}
          setSearch={setSearch}
          handleInput={handleInput}
          handleSubmit={handleSubmit}
        />
        <div className="content two-c-grid">
          <div>
            {!hideForm && (
              <Form
                filmToReview={filmToReview}
                user={user}
                setReviews={setReviews}
                reviews={reviews}
                setHideForm={setHideForm}
                hideForm={hideForm}
              />
            )}
            {!hideEdit && (
              <EditForm
                setReviews={setReviews}
                reviews={reviews}
                postToEdit={postToEdit}
                setHideEdit={setHideEdit}
                hideEdit={hideEdit}
              />
            )}
            {!hideDelete && (
              <DeleteForm
                postToDelete={postToDelete}
                setPostToDelete={setPostToDelete}
                setReviews={setReviews}
                reviews={reviews}
                hideDelete={hideDelete}
                setHideDelete={setHideDelete}
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
          <div>
            <Films
              films={films}
              filteredFilms={filteredFilms}
              setFilmToReview={setFilmToReview}
              hideForm={hideForm}
              setHideForm={setHideForm}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              user={user}
              genre={genre}
              resetFilms={resetFilms}
              setResetFilms={setResetFilms}
              setFilms={setFilms}
            />
          </div>
        </div>
      </main>
    </>
  );
}
