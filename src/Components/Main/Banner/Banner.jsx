import { BsFillCircleFill } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import s from "./Banner.module.css";

export default function Banner() {

  const [active, setActive] = useState(0);

  return (
    <div className={s.banner}>
      <div className={s.imgHolder}>
        <div style={{ marginLeft: `${active * -356}px` }}>
          <img src="/imgs/postbg.png" alt="" />
          <img src="/imgs/postbg.png" alt="" />
          <img src="/imgs/postbg.png" alt="" />
          <img src="/imgs/postbg.png" alt="" />
        </div>
      </div>
      <div className={s.bannerDots}>
        <BsFillCircleFill className={active == 0 ? s.active : ""} onClick={() => setActive(0)} />
        <BsFillCircleFill className={active == 1 ? s.active : ""} onClick={() => setActive(1)} />
        <BsFillCircleFill className={active == 2 ? s.active : ""} onClick={() => setActive(2)} />
        <BsFillCircleFill className={active == 3 ? s.active : ""} onClick={() => setActive(3)} />
      </div>
    </div>
  );
}
