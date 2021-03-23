import React from 'react';
import c from '../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = props => {
  let path = '/dialogs/' + props.id;

  return (
    <div className={c.dialog}>
      <img src="https://techcrunch.com/wp-content/uploads/2019/09/DC-7_resized.jpeg?w=730&crop=1" style={{'width': '40px', 'height': '40px', 'borderRadius': '100%'}}></img>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
