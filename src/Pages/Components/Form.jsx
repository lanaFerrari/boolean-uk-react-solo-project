import { useEffect, useState } from "react";
import React, { Component } from "react";

export default function Form(props) {
  const { filmToReview, user, setReviews, reviews } = props;

  const { name, id } = filmToReview;

  const [review, SetReview] = useState("");
  const [terms, SetTerms] = useState(false);
  const [rating, SetRating] = useState(null);

  // Form Handlers
  const handleTextArea = (e) => SetReview(e.target.value);
  const handleCheckbox = (e) => SetTerms(e.target.checked);
  const handleRating = (e) => SetRating(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userToCreate = {
      name: user,
    };

    const fetchUser = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userToCreate),
    };

    fetch("http://localhost:3030/users", fetchUser)
      .then((res) => res.json())
      .then((newUser) => {
        console.log("addresses POST request: ", newUser);

        const newPost = {
          title: name,
          review,
          filmId: id,
          terms,
          rating,
          userId: newUser.id,
          user: newUser,
        };

        const fetchPost = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPost),
        };

        fetch("http://localhost:3030/posts", fetchPost)
          .then((res) => res.json())
          .then((newPost) => {
            console.log("Posts POST request: ", newPost);

            const postToAdd = {
              ...newPost,
              user: newUser,
            };

            setReviews([...reviews, postToAdd]);
          });
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2>{filmToReview.name}</h2>
      </div>
      <label htmlFor="first-name-input">Rating(1-5)</label>
      <input
        id="rating"
        name="ratingt"
        type="rating"
        onChange={handleRating}
        value={rating}
      />
      <div>
        <label for="textarea">Review</label>
        <div>
          <textarea
            id="textarea"
            name="textarea"
            onChange={handleTextArea}
            value={review}
          >
            Write review here
          </textarea>
        </div>
      </div>

      <div>
        <input
          type="checkbox"
          id="terms"
          name="terms"
          onChange={handleCheckbox}
          checked={terms}
        />
        <label for="terms">Accept Terms and Conditions</label>
      </div>

      <div>
        <label for="sendbutton"></label>
        <div className="col-md-4">
          <button
            id="sendbutton"
            name="sendbutton"
            className="btn btn-primary"
            type="submit"
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
}
