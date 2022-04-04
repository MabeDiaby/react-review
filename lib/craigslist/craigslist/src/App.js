import React, {ReactDOM} from 'react';
import Nav from './Nav';
import './App.css'
// import ResultsList from './ResultsList';
import Results from './Results'
import Header from './Header';

const data = require('./data.json')

function App() {
  console.log(data);
  
  return (
    <div className="App">
      {/* <Nav /> */}
      <div id="header">
      <Header />
      </div>
      <div id="results">
      <Results data = {data} />
      </div>
    </div>
  );
}

export default App;
