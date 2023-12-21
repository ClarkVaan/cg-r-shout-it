import classes from "./NewShout.module.css";

function NewShout(props) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Shout</label>
        <textarea id="body" placeholder="Make your voice heard!" required rows={3} onChange={props.onMessageChange} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" placeholder="John Doe" onChange={props.onUserChange} />
      </p>
    </form>
  );
}

export default NewShout;
