import React from 'react';
import Myposts from './Myposts/Myposts';
import s from './Profile.module.css';

const Profile  = () => {
return (
<div className={s.content}>
      <div> <img src="https://tinypng.com/images/social/website.jpg"></img>
     </div>
     <div>
       ava+description
     </div>
<Myposts/>
     </div>

)

}

export default Profile