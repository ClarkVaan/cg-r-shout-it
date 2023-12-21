import { useState } from "react";

import Modal from "./Modal";
import Shout from "./Shout";
import NewShout from "./NewShout";
import classes from "./ShoutList.module.css";

function ShoutList({ modalIsVisible, onStopShouting }) {
  const [shouts, setShout] = useState([]);

  function addShoutHandler(shoutData) {
    setShout((existingShouts) => [shoutData, ...existingShouts]); //add new shout to existing
  }

  return (
    <>
      {modalIsVisible === true ? (
        <Modal onClose={onStopShouting}>
          <NewShout
            onCancel={onStopShouting}
            onAddShout={addShoutHandler}
          />
        </Modal>
      ) : null}

      {shouts.length > 0 ?
        <ul className={classes.shoutList}>
          {shouts.map((shout) => <Shout key={shout.message} message={shout.message} user={shout.user} />)}
        </ul>
        : shouts.length === 0 ? (
          <div style={{ textAlign: "center", color: "#3d3d3d", fontStyle: "italic", paddingTop: "1rem" }}>
            <h2>No shouts yet...</h2>
            <p>Be the first by clicking the <b>New Shout</b> button!</p>
          </div>
        ) : null
      }
    </>
  );
}

export default ShoutList;