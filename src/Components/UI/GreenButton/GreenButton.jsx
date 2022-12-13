import React from 'react'
import s from './GreenButton.module.css'

export default function GreenButton({text, ...props}) {
  return (
    <button className={s.button} {...props}>
      {text}
    </button>
  )
}
