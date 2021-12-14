import React from "react";
import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../../components/meetups/NewMeetupForm/NewMeetupForm";

const NewMeetUp = () => {
  const navigate = useNavigate();
  const addMeetupHandler = (meetupData) => {
    // we havto to write .json in the end while sending request in firebase realtime database(it's rule of firebase)
    console.log(meetupData);
    const url =
      "https://simple-firebase-authenti-ce80c-default-rtdb.firebaseio.com/meetups.json";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "appliaction/json",
      },
      body: JSON.stringify(meetupData),
    })
      .then(() => {
       navigate('/',{replace:true})
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>
  );
};

export default NewMeetUp;
