import React from "react";
import "./atomic.scss";

const Button = ({ text }) => {
  return (
    <div className='button'>
      <span>{text}</span>
    </div>
  )
}

export default Button;
