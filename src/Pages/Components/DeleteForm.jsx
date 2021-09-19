import { useEffect, useState } from "react";

export default function DeleteForm(props) {
  const { postToDelete, setPostToDelete, setReviews, reviews } = props;

  const { id, title, rating, review, terms, userId, filmId, user } =
    postToDelete;
  const { name } = user;

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`http://localhost:3030/posts/${postToDelete.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  return (
    <main>
      <h2>Are you sure you want to delete this review?</h2>
      <div>
        <ul>Film: {title}</ul>
        <li>By: {name}</li>
        <li>Review: {review}</li>
        <li>Rating: {rating}</li>
      </div>
      <button onClick={handleSubmit}>Delete</button>
      <button>Cancel</button>
    </main>
  );
}
