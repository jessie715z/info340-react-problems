import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

import './style.css'; //import css file!

import FIFA_MATCHES_2022 from './data/fifa-matches-2022.json'; //the data to display

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App gameData={FIFA_MATCHES_2022} />
);