import { useHistory } from "react-router-dom";

export default function Home(props) {
  const { user, setUser } = props;

  const history = useHistory();

  const handleName = (e) => setUser(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(user);
  };

  return (
    <main className="main-home twocgrid">
      <div className="box-logo space">
        <img src="https://i.imgur.com/RSSWJNe.png" alt="Logo" />
      </div>
      <form onSubmit={handleSubmit}>
        <h1>Hello, we're glad to see you.</h1>
        <input
          id="first-name"
          name="first-name"
          type="text"
          onChange={handleName}
          value={user}
          placeholder="Enter your name here"
        />
        <button type="submit" onClick={() => history.push(`/home-films`)}>
          Go
        </button>
      </form>
    </main>
  );
}
