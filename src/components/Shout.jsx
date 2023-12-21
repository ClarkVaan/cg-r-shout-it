import classes from "./Shout.module.css";

function Shout({ user, message }) {
  return (
    <li className={classes.shout}>
      <p className={classes.user}>{user}</p>
      <p className={classes.message}>{message}</p>
    </li>
  );
}

export default Shout;
