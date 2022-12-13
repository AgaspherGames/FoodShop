import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { ApiSetSelectedProduct } from "../../../../api/api";
import { setCart, setLike } from "../../../../redux/userDataReducer";
import Heart from "../../../UI/Heart/Heart";
import s from "./FeaturedProduct.module.css";

export default function FeaturedProduct({
  id,
  name,
  img,
  price,
  weight,
  isLike = false,
  isNew = false,
  discount = 0,
  isInCart = false,
  cart = 0,
}) {
  // const [like, setlike] = React.useState(isLike);

  // const onLikeClicked = () => {
  //   setlike(!like);
  // };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [InCart, setInCart] = useState(false);
  const [CartC, setCartC] = useState(1);

  return (
    <div className={s.item}>
      <div className={s.content} onClick={() => navigate(`/product/${id}`)}>
        <img src={img} alt="" />
        <p className={s.price}>${price}</p>
        <h3>{name}</h3>
        <p className={s.gray}>{weight}</p>
      </div>
      <CSSTransition timeout={500} in={isInCart} classNames="alert" unmountOnExit>
        <div className={s.bottom}>
          <div>
            <button onClick={() => dispatch(setCart([id, Number(cart) - 1]))}>
              <AiOutlineMinus className="hoverScale" />
            </button>
            <p>{cart}</p>
            <button onClick={() => dispatch(setCart([id, Number(cart) + 1]))}>
              <AiOutlinePlus className="hoverScale" />
            </button>
          </div>
        </div>
      </CSSTransition>
      <CSSTransition timeout={500} in={!isInCart} classNames="alert" unmountOnExit>
        <div className={s.bottom}>
          <button onClick={() => dispatch(setCart([id, 1]))}>
            <BsBag className="hoverScale" />
            Add to cart
          </button>
        </div>
      </CSSTransition>
      {/* {isInCart ? (
        <div className={s.bottom}>
          <div>
            <button onClick={() => dispatch(setCart([id, Number(cart) - 1]))}>
              <AiOutlineMinus />
            </button>
            <p>{cart}</p>
            <button onClick={() => dispatch(setCart([id, Number(cart) + 1]))}>
              <AiOutlinePlus />
            </button>
          </div>
        </div>
      ) : (
        <div className={s.bottom}>
          <button onClick={() => dispatch(setCart([id, 1]))}>
            <BsBag />
            Add to cart
          </button>
        </div>
      )} */}
      {discount ? <div className={s.discount}>-{discount}%</div> : ""}
      {isNew && !discount ? <div className={s.topLeft}>NEW</div> : ""}
      <div className={s.topright}>
        <Heart
          className="hoverScale"
          onClick={() => dispatch(setLike([!isLike, Number(id)]))}
          like={isLike}
        />
      </div>
    </div>
  );
}
