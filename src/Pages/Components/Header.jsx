import { useState } from "react";

export default function Header(props) {
  const { setSearchInput, user, search, setSearch, handleInput, handleSubmit } =
    props;

  return (
    <header>
      <nav className="topnav">
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
              value={search}
              onChange={handleInput}
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </nav>
    </header>
  );
}
