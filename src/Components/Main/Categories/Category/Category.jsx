import React from 'react'
import s from "./../Categories.module.css";

export default function Category({img, categoryName, color}) {
  return (
    <div className={s.item + " hoverScale"}>
      <div style={{ backgroundColor: color }}>
        <img src={img} alt="" />
      </div>
      <p>{categoryName}</p>
    </div>
  );
}
