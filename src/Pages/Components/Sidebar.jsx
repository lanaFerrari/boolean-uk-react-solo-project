export default function Sidebar(props) {
  const { films, onChange } = props;

  return (
    <div className="sidebar">
      <div className="logo-nav">
        <a href="/home-films`">
          <img src="https://i.imgur.com/RSSWJNe.png" alt="Logo" />
        </a>
      </div>
      <ul className="">
        {films.map((genre, index) => {
          return (
            <li key={index}>
              <input
                type="checkbox"
                id={genre}
                name={genre}
                value={genre}
                onChange={onChange}
              />
              <label forhtml="scales">{genre}</label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
