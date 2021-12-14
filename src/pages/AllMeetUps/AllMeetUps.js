import React, { useEffect, useState } from "react";
import MeetupList from "../../components/meetups/MeetupList/MeetupList";


const AllMeetUps = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://simple-firebase-authenti-ce80c-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setLoadedMeetups(meetups);
      });
  }, []);
  return (
    <section>
      {isLoading ? (
        <section style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <p>Loading...</p>
        </section>
      ) : (
        <MeetupList meetups={loadedMeetups} />
      )}
    </section>
  );
};

export default AllMeetUps;
