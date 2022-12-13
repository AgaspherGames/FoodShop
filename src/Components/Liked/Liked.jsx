import React from "react";
import { TransitionGroup } from "react-transition-group";
import FeaturedProduct from "../Main/FeaturedProducts/FeaturedProduct/FeaturedProduct";
import Header from "../UI/Header/Header";
import Products from "../UI/Products/Products";
import s from "./../Main/FeaturedProducts/FeaturedProducts.module.css";

export default function Liked({ userData, products }) {
  return (
    <div className={s.featuredProducts}>
      <Header text="Favorites" />
      <Products userData={userData} products={products
    .filter((el) => userData.likes.includes(Number(el.id)))}/>
    </div>
  );
}
