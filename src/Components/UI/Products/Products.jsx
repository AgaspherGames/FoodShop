import React from "react";
import FeaturedProduct from "./../../Main/FeaturedProducts/FeaturedProduct/FeaturedProduct";
import s from "./Products.module.css";

export default function Products({ products, userData }) {
  const checkCart = (id) => {
    return Object.keys(userData.cart).includes(id);
  };

  let productsArr = products.map((pr) => (
    <FeaturedProduct
      id={pr.id}
      name={pr.name}
      img={pr.img}
      price={pr.price}
      weight={pr.weight}
      isInCart={checkCart(pr.id)}
      discount={pr.discount}
      isNew={pr.isNew}
      isLike={userData.likes.includes(Number(pr.id))}
      cart={userData.cart[pr.id]}
      key={pr.id}
    />
  ));

  return (
    <div className={s.Products}>
      <div className={s.container}>{productsArr}</div>
    </div>
  );
}
