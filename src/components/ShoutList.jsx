import { useState } from "react";

import Modal from "./Modal";
import Shout from "./Shout";
import NewShout from "./NewShout";
import classes from "./ShoutList.module.css";

function ShoutList({ modalIsVisible, onStopShouting }) {
  const [userName, setUserValue] = useState('')
  const [shoutMessage, setMessageValue] = useState('')

  function userChangeHandler(event) {
    setUserValue(event.target.value);
  }

  function messageChangeHandler(event) {
    setMessageValue(event.target.value);
  }

  return (
    <>
      {modalIsVisible === true ? (
        <Modal onClose={onStopShouting}>
          <NewShout
            onUserChange={userChangeHandler}
            onMessageChange={messageChangeHandler}
          />
        </Modal>
      ) : null}
      <ul className={classes.shoutList}>
        <Shout user={userName} message={shoutMessage} />
      </ul>
    </>
  );
}

export default ShoutList;