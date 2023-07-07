import React from "react";
import ButtonIcon from "../components/common/ButtonIcon/ButtonIcon";
import "./style.scss";

function PlayerMusicView() {
	return (
		<div class="container">
			<div class="header">
				<ButtonIcon />
				<div>
					<span> lorem lorem lorem </span>
					<span> lorem lorem lorem</span>
				</div>
				<ButtonIcon />
			</div>

			<div class="img--container">
				<div class="img"></div>
			</div>

			<div class="controls--container">
				<div class="song--container">
					<div class="song">
						<div class="name">lorem lorem </div>
						<div class="artist">lorem lorem </div>
					</div>
			    <ButtonIcon />

				</div>
				<div class="progressbar--container">
					<input type="range" />
					<span> 2:13 </span>
					<span> 4:13 </span>
				</div>

				<div class="controls">
					<ButtonIcon  />
					<ButtonIcon />
					<ButtonIcon />
					<ButtonIcon />
					<ButtonIcon />
				</div>

				<div class="subControls">
					<ButtonIcon />
					<ButtonIcon />
					<ButtonIcon />
				</div>
			</div>
		</div>
	);
}

export default PlayerMusicView;
