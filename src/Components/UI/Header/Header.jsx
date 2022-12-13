import React from "react";
import { BiChevronRight } from "react-icons/bi";
import s from './Header.module.css'

export default function Header({text}) {
  return (
    <div className={s.top}>
      <h2>
        {text}
      </h2>
      {/* <BiChevronRight className="hoverScale" /> */}
    </div>
  );
}
