import React, { useEffect, useState } from 'react'
import { act } from 'react-dom/test-utils';
import { BiHeart, BiHomeAlt, BiShoppingBag, BiUserCircle } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import s from './Footer.module.css'


export default function Footer() {

  const [active, setActive] = useState(window.location.href.split("http://localhost:3000")[1]);
  const pages = ['/','/profile','/liked','/cart']

  useEffect(() => {
    setActive(window.location.href.split("http://localhost:3000")[1]);
  }, [window.location.href]);

  return (
    <footer>
      <div className={s.footer}>
        <NavLink to="/" className={({ isActive }) => (isActive ? s.active : "")}>
          <button
            onClick={() => setActive(pages[0])}
            className={active == pages[0] ? s.active : ""}>
            <BiHomeAlt />
          </button>
        </NavLink>
        <button onClick={() => setActive(pages[1])} className={active == pages[1] ? s.active : ""}>
          <BiUserCircle />
        </button>
        <NavLink to="/liked" className={({ isActive }) => (isActive ? s.active : "")}>
          <button
            onClick={() => setActive(pages[2])}
            className={active == pages[2] ? s.active : ""}>
            <BiHeart />
          </button>
        </NavLink>
        <NavLink to="/cart" className={({ isActive }) => (isActive ? s.active : "")}>
          <button
            onClick={() => setActive(pages[3])}
            className={active == pages[3] ? s.active : ""}>
            <BiShoppingBag />
          </button>
        </NavLink>
      </div>
    </footer>
  );
}
