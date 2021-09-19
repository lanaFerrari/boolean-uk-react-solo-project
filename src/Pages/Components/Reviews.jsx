import ReactStars from "react-rating-stars-component";
import { useEffect, useState } from "react";

export default function Reviews(props) {
  const {
    reviews,
    rating,
    setRating,
    hideEdit,
    setHideEdit,
    hideDelete,
    setHideDelete,
    postToEdit,
    setPostToEdit,
    postToDelete,
    setPostToDelete,
  } = props;

  const ratingChanged = (e) => setRating(e.target.value);

  return (
    <ul>
      <h2>Reviews</h2>
      {reviews.map((rev, index) => {
        const { id, title, review, filmId, terms, rating, userId, user } = rev;
        return (
          <li key={index}>
            <h3>{title}</h3>
            <p>{review}</p>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              isHalf={true}
              value={rating}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
            <button
              onClick={() => {
                setHideEdit(!hideEdit);
                setPostToEdit(rev);
              }}
            >
              {hideEdit ? "Edit" : "Cancel"}
            </button>
            <button
              onClick={() => {
                setHideDelete(!hideDelete);
                setPostToDelete(rev);
              }}
            >
              {hideDelete ? "Delete" : "Cancel"}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
