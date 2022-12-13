import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import s from './Heart.module.css'

export default function Heart({ like, onClick }) {
  const [anim, setAnim] = useState(false);
  const onCL = () => {
    onClick()
    setAnim(false)
  }
  return (
    <div className={s.div + ' hoverScale'}>
      {like ? (
        <button onClick={() => setAnim(true)}>
          <AiFillHeart
            className={!anim ? s.active : s.unlike}
            onAnimationEndCapture={anim ? onCL : () => {}}
          />
        </button>
      ) : (
        <button>
          <AiOutlineHeart onClick={onClick} />
        </button>
      )}
    </div>
  );
}
