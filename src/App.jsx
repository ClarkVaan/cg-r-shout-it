import { useState } from "react";

import ShoutList from "./components/ShoutList";
import MainHeader from "./components/MainHeader";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  function showModalHandler() {
    setModalIsVisible(true);
  }

  return (
    <>
      <MainHeader onCreateShout={showModalHandler} />
      <main>
        <ShoutList
          modalIsVisible={modalIsVisible}
          onStopShouting={hideModalHandler}
        />
      </main>
    </>
  );
}

export default App;
