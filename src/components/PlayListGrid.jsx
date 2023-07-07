import React from "react";
import style from "../css/PlayListGrid.module.scss";
import PlayListSmall from "./PlayListSmall";

function PlayListGrid() {
	return (
		<div className={style.container}>
			<PlayListSmall />
			<PlayListSmall />
			<PlayListSmall />
			<PlayListSmall />
			<PlayListSmall />
			<PlayListSmall />
    
		</div>
	);
}

export default PlayListGrid;
