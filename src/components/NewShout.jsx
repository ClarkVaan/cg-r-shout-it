import {useState} from "react";
import classes from "./NewShout.module.css";

function NewShout() {
  const stateData = useState('');
  
  let shoutMessage = '';

  function changeBodyHandler(event) {
    shoutMessage= event.target.value;
  }

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Shout</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler}/>
      </p>
      <p>{shoutMessage}</p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

export default NewShout;
