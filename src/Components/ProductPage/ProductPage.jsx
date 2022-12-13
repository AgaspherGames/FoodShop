import React, { useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import { ApiSetSelectedProduct } from "../../api/api";
import { setCart, setLike } from "../../redux/userDataReducer";
import GreenButton from "../UI/GreenButton/GreenButton";
import Heart from "../UI/Heart/Heart";
import s from "./ProductPage.module.css";

export default function ProductPage() {
  const dispatch = useDispatch();
  let params = useParams();
  const cart = useSelector((state) => state.userData.data[0].cart);
  const likes = useSelector((state) => state.userData.data[0].likes);
  const product = useSelector((state) => state.products.selectedProduct);

  useEffect(() => {
    ApiSetSelectedProduct(dispatch, params["*"]);
  }, []);
  let isInCart = Object.keys(cart).includes(product.id);
  let isLike = likes.includes(Number(product.id));
  if (!product.name) return <div>aaa</div>;
  return (
    <div className={s.product}>
      <div style={{background: `linear-gradient(${product.color} 0%, white 70%)`}} className={s.bg}></div>
      <img src={product.imgBig} alt="" />
      <div className={s.content}>
        <h2>{product.name}</h2>
        <p>{product.weight}</p>
        <h2 className={s.price}>${product.price}</h2>
        <p>{product.description}</p>
        <div className={s.heart}>
          <Heart onClick={() => dispatch(setLike([!isLike, Number(product.id)]))} like={isLike} />
        </div>
      </div>
      {/* <GreenButton text={"Add to cart"} /> */}
      <div>
        <CSSTransition timeout={500} in={isInCart} classNames="alert" unmountOnExit>
          <div className={s.bottom}>
            <button onClick={() => dispatch(setCart([product.id, Number(cart[product.id]) - 1]))}>
              <AiOutlineMinus className="hoverScale" />
            </button>
            <p className={s.count}>{cart[product.id]}</p>
            <button onClick={() => dispatch(setCart([product.id, Number(cart[product.id]) + 1]))}>
              <AiOutlinePlus className="hoverScale" />
            </button>
          </div>
        </CSSTransition>
        <CSSTransition timeout={500} in={!isInCart} classNames="alert" unmountOnExit>
          <GreenButton onClick={() => dispatch(setCart([product.id, 1]))} text={"Add to cart"} />
        </CSSTransition>
      </div>
    </div>
  );
}
