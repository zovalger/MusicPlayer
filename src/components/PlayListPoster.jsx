import React from "react";
import style from "../css/PlayListPoster.module.scss";

function PlayListPoster() {
	return (
		<div className={style.container}>
			<div className={style.poster}>
				<div className={style.title}>Lorem, ipsum.</div>
			</div>
			<div className={style.subTitle}>Lorem ipsum dolor sit amet, sit amet, consectetur</div>
		</div>
	);
}

export default PlayListPoster;
