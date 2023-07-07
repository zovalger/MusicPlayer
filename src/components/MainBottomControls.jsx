import React from "react";

import style from "../css/MainBottomControls.module.scss";
import MusicPlayerMin from "./MusicPlayerMin";
import SectionNavBar from "./SectionNavBar";

function MainBottomControls() {
	return (
		<div className={style.container}>


		<MusicPlayerMin />

		<SectionNavBar />

			
		</div>
	);
}

export default MainBottomControls;
