import { useEffect, useState } from "react";

export default function Header(props) {
  const { setSearchInput, searchInput, user } = props;

  const handleInput = (e) => setSearchInput(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchInput(searchInput);
  };

  console.log("Submit", searchInput);
  return (
    <header>
      <nav className="topnav">
        <div className="logo-nav">
          <a href="/home-films`">
            <img src="https://i.imgur.com/RSSWJNe.png" alt="Logo" />
          </a>
        </div>
        <div className="margin-header"></div>

        <a href="#about">
          <h1>Hello,{user}!</h1>
        </a>
        <div className="search-container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search for films"
              name="search"
              value={searchInput}
              onChange={handleInput}
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </nav>
    </header>
  );
}
