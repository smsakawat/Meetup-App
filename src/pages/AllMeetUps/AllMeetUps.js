import React from "react";
const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is the first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is the first meetup,an amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is the second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is the seconde meetup,an amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

const AllMeetUps = () => {
  return (
    <section>
      <div>
        {DUMMY_DATA.map((meetup) => {
          return <p>{meetup.title}</p>;
        })}
      </div>
    </section>
  );
};

export default AllMeetUps;
