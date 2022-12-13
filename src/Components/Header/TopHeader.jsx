import React, { useState } from "react";
import { BiSearch, BiSliderAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { ApiSetSortedProducts } from "../../api/api";
import s from "./Header.module.css";
import MyHeader from "../UI/Header/Header";
import { CSSTransition } from "react-transition-group";
import { setSortParams } from "../../redux/productsReducer";

export default function Header() {
  const [sortText, setSortText] = useState("");
  const [sortOpen, setSortOpen] = useState(false);
  const dispatch = useDispatch();
  const sortParams = useSelector((state) => state.sortParams);

  const [sortParam, setSortParam] = useState('name');

  const sortChanged = (text,param, order='') => {
    setSortParam(param)
    setSortText(text);
    ApiSetSortedProducts(dispatch, { name: text, param: param, desc: order });
  };

  return (
    <header>
      <div className={s.search}>
        <div className={s.iconCenter}>
          <BiSearch />
        </div>
        <input
          value={sortText}
          onChange={(e) => sortChanged(e.target.value)}
          placeholder="Search"
          type="text"
        />
        <div className={s.iconCenter}>
          <BiSliderAlt onClick={() => setSortOpen(!sortOpen)} />
        </div>
      </div>
      <CSSTransition timeout={500} in={sortOpen} classNames="alert" unmountOnExit>
        <div className={s.params}>
          <h2>Sort By</h2>
          <div className={s.btnHolder}>
            <button
              onClick={() => sortChanged(sortText, "name" )}
              className={sortParam == "name" ? s.active : ""}>
              Name
            </button>
            <button
              onClick={() => sortChanged( sortText, "price" )}
              className={sortParam == "price" ? s.active : ""}>
              Price
            </button>
            <button
              onClick={() => sortChanged( sortText, "discount", 'desc' )}
              className={sortParam == "discount" ? s.active : ""}>
              Discount
            </button>
          </div>
        </div>
      </CSSTransition>
    </header>
  );
}
