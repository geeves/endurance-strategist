import "./App.css";
import { Grommet } from 'grommet';
import OverallRaceInfo from "./OverallRaceInfo";


function App() {
  return (
		<Grommet full>
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
