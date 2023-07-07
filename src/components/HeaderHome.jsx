import React from "react";
import style from "../css/HeaderHome.module.scss";
import { AiOutlineMore, AiOutlineSearch } from "react-icons/ai";

function HeaderHome() {
	return (
		<div className={style.container}>
			{/* 
				<div className="company--container">
					<span className="company-logo"></span>
					<span className="company-name">companyName</span>
				</div> */}

			<div className={style.title}>Lorem, ipsum.</div>

			<button className={style.btn}>
				<AiOutlineSearch />
			</button>

			<button className={style.btn}>
				<AiOutlineMore />
			</button>
		</div>
	);
}

export default HeaderHome;
