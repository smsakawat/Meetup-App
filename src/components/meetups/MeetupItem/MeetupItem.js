import React, { useContext } from "react";
import FavouritesContext from "../../../store/FavouritesContextProvider";
import Card from "../../ui/Card/Card";
import classes from "./MeetupItem.module.css";

const MeetupItem = (props) => {
  const { id, title, image, address, description } = props.meetup;
  const favouritesContext = useContext(FavouritesContext);
  const itemIsFavrourite = favouritesContext.itemIsFavourite(id);

  const addOrRmoveHandler = (id) => {
    console.log(itemIsFavrourite);
    if (itemIsFavrourite) {
      favouritesContext.removeFavourite(id);
    } else {
      favouritesContext.addFavourite(props.meetup);
    }
  };
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={() => addOrRmoveHandler(id)}>
            {itemIsFavrourite ? "Remove from Favourites" : "To Favourites"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
