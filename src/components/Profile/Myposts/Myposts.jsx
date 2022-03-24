import React from 'react';
import s from '../Myposts/Myposts.module.css';
import Post from './Post/Post';

const Myposts  = () => {
return (
  <div>
    My posts
<div>
  <textarea> text</textarea>
  <button>Add post</button>
  <button>Remove</button>
</div>
<div className={s.posts}>
       <Post message = 'Hi! How are you?' likescount='15'/>
       <Post message= "It's my first post" likescount='23'/>
       <Post />
     </div>
     </div>)


}

export default Myposts;