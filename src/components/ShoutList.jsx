import { useState } from "react";

import Modal from "./Modal";
import Shout from "./Shout";
import NewShout from "./NewShout";
import classes from "./ShoutList.module.css";

function ShoutList() {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  function hideModalHandler() {
    setModalIsVisible(false);
  }

  const [userName, setUserValue] = useState('')
  function userChangeHandler(event) {
    setUserValue(event.target.value);
  }

  const [shoutMessage, setMessageValue] = useState('')
  function messageChangeHandler(event) {
    setMessageValue(event.target.value);
  }

  return (
    <>
      {modalIsVisible === true ? (
        <Modal onClose={hideModalHandler}>
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