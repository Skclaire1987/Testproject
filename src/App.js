import React from 'react';
import './App.css';
import s1 from './components/Header/Header.module.css';
import s from './components/Profile/Profile.module.css';
import classes from './components/Navbar/Navbar.module.css'
import Myposts from './components/Profile/Myposts/Myposts.jsx';


//let classes = {
  //'nav': 'Navbar_nav__DS0RX',
  //'item': 'Navbar_item__Ccd2B'
//}

//let classesNew = ${s.item} ${s.acrive}

const App = () => {
  return(
    <div className='app-wrapper'>
      <header className= {s1.header}>
<img src='data:image/png;base64,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'></img>
</header>
<nav className={classes.nav}>
<div className={'${classes.item}${classes.active}'}>
<a>Profile</a>
</div>
<div className={'${classes.item}${classes.active}'}>
<a>Messages</a>
</div>
<div className={classes.item}>
<a>News</a>
</div>
<div className={classes.item}>
<a>Music</a>
</div>
</nav>
<div className={s.content}>
  <div>
      <img src="https://tinypng.com/images/social/website.jpg"></img>
     </div>
     <div>
       ava+description
     </div>
     <Myposts />
      
     </div>
     </div>
    
    
  );
}




export default App;