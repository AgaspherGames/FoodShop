import React from "react";
import { BiChevronRight } from "react-icons/bi";
import Header from "../../UI/Header/Header";
import s from "./Categories.module.css";
import Category from "./Category/Category";

export default function Categories() {
  return (
    <div className={s.categories}>
      <Header text="Categories" />
      <div className={s.container}>
        <Category img="/imgs/vegetables.svg" categoryName="Vegetables" color="#E6F2EA" />
        <Category img="/imgs/fruits.svg" categoryName="Fruits" color="#FFE9E5" />
        <Category img="/imgs/beverage.svg" categoryName="Beverages" color="#FFF6E3" />
        <Category img="/imgs/grocery.svg" categoryName="Grocery" color="#F3EFFA" />
        <Category img="/imgs/oil.svg" categoryName="Edible oil" color="#DCF4F5" />
      </div>
    </div>
  );
}
