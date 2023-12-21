import { useState } from "react";

import classes from "./NewShout.module.css";

function NewShout({ onAddShout, onCancel }) {
  const [userName, setUserValue] = useState('')
  const [shoutMessage, setMessageValue] = useState('')

  function userChangeHandler(event) {
    setUserValue(event.target.value);
  }

  function messageChangeHandler(event) {
    setMessageValue(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault(); //prevents http request for dummy backend
    const shoutData = {
      user: userName,
      message: shoutMessage

    };
    onAddShout(shoutData);
    onCancel(); //exits form modal
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Shout</label>
        <textarea id="body" placeholder="Make your voice heard!" required rows={3} onChange={messageChangeHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" placeholder="John Doe" onChange={userChangeHandler} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>Cancel</button>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
}

export default NewShout;
