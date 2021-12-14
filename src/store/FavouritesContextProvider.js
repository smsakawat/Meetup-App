import { createContext, useState } from "react";

const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFavourite: (newMeetup) => {},
  removeFavourite: (meetupId) => {},
  itemIsFavrourite: (meetupId) => {},
});

export const FavouritesContextProvider = ({ children }) => {
  const [userFavourites, setUserFavourites] = useState([]);

  //   handlers for controlling the favourites context
  // to control adding favourties
  const addFavouriteHandler = (newFavouriteMeetup) => {
    setUserFavourites((prvsFavourites) => {
      return prvsFavourites.concat(newFavouriteMeetup);
    });
  };

  // to control remove favourites
  const removeFavouriteHandler = (meetupId) => {
    const remainingMeetups = userFavourites.filter(
      (meetup) => meetup.id !== meetupId
    );
    setUserFavourites(remainingMeetups);
  };

  // helper handler for favourites
  const itemIsFavouriteHandler = (meetupId) => {
    /* this some is also an array metod which will return true it there is even or true condition exists or it'll return false as the conditions given in the callback */
    return userFavourites.some((meetup) => meetup.id === meetupId);
  };

  const context = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
    addFavourite: addFavouriteHandler,
    removeFavourite: removeFavouriteHandler,
    itemIsFavourite: itemIsFavouriteHandler,
  };
  return (
    <FavouritesContext.Provider value={context}>
      {children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesContext;
