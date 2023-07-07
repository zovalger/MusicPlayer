import "./App.scss";

import HeaderHome from "./components/HeaderHome";

import PlayListGrid from "./components/PlayListGrid";
import PlayListCarusel from "./components/PlayListCarusel";
import MainBottomControls from "./components/MainBottomControls";
import PlayerMusicView from "./views/PlayerMusicView";

function App() {
	return (
		<div className="App">

			<div className="page">
				<HeaderHome />
				<PlayListGrid />

				<PlayListCarusel />
				<PlayListCarusel />
			</div>



			<MainBottomControls />


			<PlayerMusicView/>
		</div>
	);
}

export default App;
