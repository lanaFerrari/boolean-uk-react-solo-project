import { useEffect, useState } from "react";

export default function EditForm(props) {
  const { setReviews, reviews, postToEdit, hideEdit, setHideEdit } = props;

  // console.log("Post to edit", postToEdit);

  const [name, setName] = useState("");
  const [rating, setRating] = useState(null);
  const [review, setReview] = useState("");

  // useEffect keeps track of the changes in the component
  useEffect(() => {
    if (postToEdit) {
      const { rating, review, user } = postToEdit;
      const { name } = user;

      setName(name);
      setRating(rating);
      setReview(review);
    }
  }, [postToEdit]);

  // Form Handlers

  const handleSubmit = (event) => {
    event.preventDefault();

    const userToEditId = postToEdit.user.id;

    const userToEdit = {
      name,
    };

    const userFetchOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userToEdit),
    };

    fetch(`http://localhost:3030/users/${userToEditId}`, userFetchOptions)
      .then((res) => res.json())
      .then((updatedUser) => {
        const postToUpdate = {
          rating,
          review,
          userId: postToEdit.filmId,
        };

        const PostFetchOptions = {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postToUpdate),
        };

        fetch(`http://localhost:3030/posts/${postToEdit.id}`, PostFetchOptions)
          .then((res) => res.json())
          .then((updatedPost) => {
            console.log("contacts PATCH request: ", updatedPost);

            const updatedPosts = reviews.map((review) => {
              if (review.id === updatedPost.id) {
                return {
                  ...updatedPost,
                  user: {
                    ...updatedUser,
                  },
                };
              }

              return review;
            });

            setReviews(updatedPosts);
            setHideEdit(!hideEdit);
          });
      });
  };

  const handleName = (e) => setName(e.target.value);
  const handleReview = (e) => setReview(e.target.value);
  const handleRating = (e) => setRating(e.target.value);

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <h1>Edit Review</h1>
        <div>
          <label htmlFor="name">Change user name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={handleName}
            value={name}
          />
        </div>

        <div>
          <label htmlFor="rating">Change rating(1-5)</label>
          <input
            id="rating"
            name="ratingt"
            type="rating"
            onChange={handleRating}
            value={rating}
          />
        </div>

        <div>
          <label for="textarea">Change Review</label>
          <div>
            <textarea
              id="textarea"
              name="textarea"
              onChange={handleReview}
              value={review}
            >
              Write review here
            </textarea>
          </div>
        </div>

        <div>
          <button type="submit">Send</button>
        </div>
        <button
          className="btn"
          onClick={() => {
            setHideEdit(!hideEdit);
          }}
        >
          Cancel
        </button>
      </form>
    </main>
  );
}
