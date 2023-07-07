import React from "react";
import style from "../css/SectionNavBar.module.scss";

function SectionNavBar(params) {
	console.log(style);

	return (
		<div className={style.container}>
			<button className={style.select}>
				<div className={style.icon}></div>
				<span className={style.tag}>home</span>
			</button>

			<button className={""}>
				<div className={style.icon}></div>
				<span className={style.tag}>search</span>
			</button>
			<button className={""}>
				<div className={style.icon}></div>
				<span className={style.tag}>library</span>
			</button>
		</div>
	);
}

export default SectionNavBar;
