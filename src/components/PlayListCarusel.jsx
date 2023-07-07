import React from "react";
import style from "../css/PlayListCarusel.module.scss";
import PlayListPoster from "./PlayListPoster";

function PlayListCarusel() {
	return (
		<>
			<div className={style.title}>Lorem, ipsum dolor.</div>

			<div className={style.container}>
				{/* <div className={style.scroll}> */}
				<PlayListPoster />
				<PlayListPoster />
				<PlayListPoster />
				<PlayListPoster />
				<PlayListPoster />

				{/* </div> */}
			</div>
		</>
	);
}

export default PlayListCarusel;
