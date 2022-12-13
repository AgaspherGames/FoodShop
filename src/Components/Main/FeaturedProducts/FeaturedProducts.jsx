import React from "react";
import { TransitionGroup } from "react-transition-group";
import Header from "../../UI/Header/Header";
import Products from "../../UI/Products/Products";
import FeaturedProduct from "./FeaturedProduct/FeaturedProduct";
import s from "./FeaturedProducts.module.css";

export default function FeaturedProducts({ products, userData }) {
  return (
    <div className={s.featuredProducts}>
      <Header text="Featured products" />
      <Products userData={userData} products={products} />
    </div>
  );
}
