import React from "react";
import style from "./ButtonIcon.module.scss";

function ButtonIcon({ size }) {
	console.log(style);

	return <button className={size ? style[`btn-${size}`] : "btn"}> </button>;
}

export default ButtonIcon;
