import React from "react";
import style from "../css/MusicPlayerMin.module.scss";

function MusicPlayerMin(params) {
	return (
		<div className={style.container}>
			<div className={style.img}> </div>
			<div className={style.description}>
				<span className={style.name}> name </span>
				<span className={style.artist}> artist </span>
			</div>

			<button> a </button>
			<button> a </button>
			<button> a </button>

			<div className={style.progressbar}>
				<div></div>
			</div>
		</div>
	);
}

export default MusicPlayerMin;
