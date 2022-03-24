import React from 'react';
import classes from './Navbar.module.css';

const Navbar  = () => {
return (
    <nav className={classes.nav}>
    <div className={`${classes.item}${classes.active}`}>
      <a href="/profile">Profile</a>
    </div>
    <div className={`${classes.item}${classes.active}`}>
      <a href ="/messages">Messages</a>
    </div>
    <div className={classes.item}>
      <a href="/News">News</a>
    </div>
    <div className={classes.item}>
      <a href="/music">Music</a>
    </div>
    </nav>)
}

export default Navbar;