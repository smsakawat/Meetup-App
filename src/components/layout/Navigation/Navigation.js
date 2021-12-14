import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FavouritesContext from "../../../store/FavouritesContextProvider";
import classes from "./Navigation.module.css";

const Navigation = () => {
  const favouritesContext = useContext(FavouritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Meetup</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favourites">Fovourites</Link>
            <span className={classes.badge}>
              {favouritesContext.totalFavourites}
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
