import React from 'react';
import ReactDOM from 'react-dom';
// import Tile from './components/tile';
import Game from './components/game';
// import Board from './components/board';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Minesweeper/>, root);
});

function Minesweeper() {
  return (
    <div className='app'>
      <h1>Lets play some Minesweeper!</h1>
      <Game/>
    </div>
  );
}

