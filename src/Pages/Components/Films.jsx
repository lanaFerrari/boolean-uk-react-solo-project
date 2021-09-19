export default function films(props) {
  const { films, setFilmToReview, hideForm, setHideForm } = props;

  return (
    <div>
      <h3>Films</h3>
      <ul className="responsive-grid">
        {films.map((film, index) => {
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
                  {hideForm ? "Select" : "Cancel"}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
