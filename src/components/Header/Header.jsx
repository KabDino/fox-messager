import React from 'react';
import c from './Header.module.css';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.svg'

const Header = (props) => {
  return (
    <header className={c.header}>
      {/* <img src="https://ucarecdn.com/d79e8f97-b914-4c17-a1b1-cb1a26ae6c84/"></img> */}
      <img src={logo}></img>

      <div className={c.loginBlock}>
        {props.isAuth ? (
          <div>
            <p>{props.login}</p>
            <button onClick={props.logout}>Log out</button>
          </div>
        ) : (
          <NavLink to={'/login'}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
