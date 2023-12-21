import { MdPostAdd, MdMessage } from 'react-icons/md';

import classes from './MainHeader.module.css';

function MainHeader({ onCreateShout }) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        Shout It!
      </h1>
      <p>
        <button className={classes.button} onClick={onCreateShout}>
          <MdPostAdd size={18} />
          New Shout
        </button>
      </p>
    </header>
  );
}

export default MainHeader;