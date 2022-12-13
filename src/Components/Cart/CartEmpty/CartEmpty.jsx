import React from "react";
import { NavLink } from "react-router-dom";
import GreenButton from "../../UI/GreenButton/GreenButton";
import s from "./CartEmpty.module.css";

const CartEmpty = () => {
  return (
    <>
      <div className={s.empty}>
        <img src="/imgs/cart.svg" alt="" />
        <h3>Your cart is empty !</h3>
        <p>You will get a response within a few minutes.</p>
      </div>
      <NavLink to="/">
        <GreenButton text={"Start Shopping"} />
      </NavLink>
    </>
  );
};

export default CartEmpty;
