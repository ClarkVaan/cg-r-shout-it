import classes from "./Shout.module.css";

function Shout(props) {
  return (
    <li className={classes.shout}>
      <p className={classes.user}>{props.user}</p>
      <p className={classes.message}>{props.message}</p>
    </li>
  );
}

export default Shout;
