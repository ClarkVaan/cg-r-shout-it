import Shout from "./Shout";
import NewShout from "./NewShout";
import classes from "./ShoutList.module.css";

function ShoutList() {
  return(
    <>
    <NewShout />
    <ul className={classes.shoutList}>
      <Shout user = "Clark" message = "Hello" />
      <Shout user = "Heidee" message = "Hi" />
    </ul>
    </>
  );
}

export default ShoutList;