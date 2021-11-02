import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";


function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-columnNav">
          <li className="mx-1">
            <Link to="/orderHistory" className="addCartNav">
              Order History
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/NewListing" className="addCartNav">
              Create New Listing
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" className="addCartNav" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-columnNav">
          <li className="mx-1">
            <Link to="/signup" className="addCartNav">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login" className="addCartNav">
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
        </Link>
        <h3>Farmer's Network</h3>
      </h1>

      {/* search bar added */}
      <form action="/" method="get" className="  searchBar">
        <label htmlFor="header-search">
          <span className="visually-hidden">Search Listings</span>
        </label>
        <input
          type="text"
          id="header-search"
          placeholder="Enter a product..."
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
