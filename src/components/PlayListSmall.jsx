import React from "react";
import style from "../css/PlayListSmall.module.scss";

function PlayListSmall() {
	return (
		<div className={style.container}>
			<div className={style.album}></div>
			<div className={style.title}>Lorem, ipsum.</div>
		</div>
	);
}

export default PlayListSmall;
