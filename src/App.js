import React from 'react';
import Board from './components/Board';
import Header from './components/Header';
import Title from './components/Title';

import './app.scss';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Title />
      <Board />
    </div>
  );
};

export default App;
