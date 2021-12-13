import React from "react";
import MeetupItem from "../MeetupItem/MeetupItem";
import classes from "./MeetupList.module.css";
const MeetupList = ({ meetups }) => {
  return (
    <ul className={classes.list}>
      {meetups.map((meetup) => (
        <MeetupItem key={meetup.id} meetup={meetup} />
      ))}
    </ul>
  );
};

export default MeetupList;
