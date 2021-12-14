import React, { useRef } from "react";
import Card from "../../ui/Card/Card";
import classes from "./NewMeetupForm.module.css";

const NewMeetupForm = ({ onAddMeetup }) => {
  const titleIntputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  // sumbit-hander to submit meetup in database
  const submitHandler = (e) => {
    e.preventDefault();

    const titleValue = titleIntputRef.current.value;
    const imageValue = imageInputRef.current.value;
    const addressValue = addressInputRef.current.value;
    const descriptionValue = descriptionInputRef.current.value;
    const meetupData = {
      title: titleValue,
      image: imageValue,
      address: addressValue,
      description: descriptionValue,
    };

    onAddMeetup(meetupData);
    e.target.reset();
  };
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required ref={titleIntputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Image</label>
          <input type="url" required ref={imageInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="title">Address</label>
          <input type="text" required ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="title" required>
            Description
          </label>
          <textarea type="text" rows="5" ref={descriptionInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
