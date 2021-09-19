export default function Sidebar(props) {
  const { films } = props;
  return (
    <div className="sidebar">
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
  );
}
