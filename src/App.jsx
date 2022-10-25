import './App.css';

import Searchbar from './custom/searchbar';
import Result from './custom/result';
import Footer from './custom/footer';

import { useState } from "react"

function App() {


  const [resultsState, setResultsState] = useState()

  return (
    <div className="App">
      <main>
        <Searchbar searchFunction={setResultsState} />
        <ul className="results">
          {resultsState && resultsState.map(result => <Result data={result} key={result.begreppId} />)}
        </ul>
        <Footer />
      </main>
    </div>
  );
}

export default App;
