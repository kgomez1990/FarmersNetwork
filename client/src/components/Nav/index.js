import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-column">
          <li className="mx-1">
            <Link to="/orderHistory">
              Order History
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/Profile">
              Create New Listing
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-column">
          <li className="mx-1">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1 justify-content: space-between ">
      <h1>
        <Link to="/">
          <span role="img" aria-label="shopping bag">🌾🌻🌽</span>
          FarmerNetwork
        </Link>
      </h1>

      {/* search bar added */}
      <form action="/" method="get" className="  searchBar">
        <label htmlFor="header-search">
          <span className="visually-hidden">Search your items</span>
        </label>
        <input
          type="text"
          id="header-search"
          placeholder="Search your items"
          name="s"
        />
        <button type="submit">Search</button>
      </form>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
