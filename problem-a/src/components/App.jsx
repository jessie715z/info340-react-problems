import React from 'react'; //import React library

/* Your code goes here */
import { SenatorTable } from './SenatorTable';

function App({ senatorsList }) {
  return (
    <div className="container">
      <h1>US Senators (Sep 2025)</h1>
      <SenatorTable senatorsList={senatorsList} />
    </div>
  );
}

export default App;