import React from "react";
import FeaturedProduct from "../Main/FeaturedProducts/FeaturedProduct/FeaturedProduct";
import GreenButton from "../UI/GreenButton/GreenButton";
import Header from "../UI/Header/Header";
import s from "./../Main/FeaturedProducts/FeaturedProducts.module.css";
import CartEmpty from "./CartEmpty/CartEmpty";
import classes from "./Cart.module.css";
import { NavLink } from "react-router-dom";
import Products from "../UI/Products/Products";

export default function Cart({ userData, products }) {
  const checkCart = (id) => {
    return Object.keys(userData.cart).includes(id);
  };

  let total = 0;

  let productsArr = products
    .filter((el) => checkCart(el.id))
    .map((pr) => {
      total += Number(pr.price) * userData.cart[pr.id];
    });

  return (
    <>
      <div className={s.featuredProducts}>
        <Header text="Shopping Cart" />
        {!productsArr.length ? (
          <CartEmpty />
        ) : (
          <Products products={products.filter((el) => checkCart(el.id))} userData={userData} />
        )}
      </div>
      <div className={classes.bottom}>
        <Header text={`Total: $${total.toFixed(2)}`} />
        <NavLink to="/order">
          <GreenButton text={"Make An Order"} />
        </NavLink>
      </div>
    </>
  );
}
