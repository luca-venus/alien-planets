import './App.css';
import PlanetTable from './components/planet-table';
import useFetchData from './fetch-planets-hook';
import { sortBy } from 'lodash';

function App() {
 const [data] = useFetchData();
  const sortedData = data.planetInfo?.results && sortBy(data.planetInfo.results, [ planet => planet.name ]);
  return (
    <div className="App">
      <header className="App-header">
          Planet information        
      </header>
      {
        data.loading ? <div>loading</div> :
          data.error ? <div>Sorry, there was an error loading your data </div> :
            <PlanetTable info={sortedData} />
      }
    </div>
  );
}

export default App;
