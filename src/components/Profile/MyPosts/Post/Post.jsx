import React from 'react';
import c from './Post.module.css';

const Post = props => {
  return (
    <div className={c.item}>
      <img src="https://techcrunch.com/wp-content/uploads/2019/09/DC-7_resized.jpeg?w=730&crop=1"></img>
      {props.message}
      <div>
        <span>♥{props.likes}</span>
      </div>
    </div>
  );
};

export default Post;
