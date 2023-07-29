import "./App.css";
import { Grommet } from 'grommet';
import OverallRaceInfo from "./OverallRaceInfo";
import React from "react";


function App() {
  return (
		<Grommet>
      <header className="App-header">
				Hello Grommet
      </header>
			<section>
				<OverallRaceInfo/>
			</section>
		</Grommet>
  );
}

export default App;
