import React, { useContext } from "react";
import MeetupList from "../../components/meetups/MeetupList/MeetupList";
import FavouritesContext from "../../store/FavouritesContextProvider";

const Favourites = () => {
  const favouritesConext = useContext(FavouritesContext);

  return (
    <section>
      <h1>My Favourites</h1>
      {favouritesConext.favourites.length === 0 ? (
        <p style={{ color: "gray" }}>You got no favourites.Want to add one?</p>
      ) : (
        <MeetupList meetups={favouritesConext.favourites} />
      )}
    </section>
  );
};

export default Favourites;
