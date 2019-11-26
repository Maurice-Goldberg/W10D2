import React from 'react';
import * as Minesweeper from '../minesweeper.js';
import Tile from './tile';

class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {grid} = this.props.board;
    let builtGrid =
        grid.map((row, i) => {
          return (<div className="row" key = {i}>
            {row.map((tile,j) => {
              return (<Tile 
                key = {j}
                tile= {tile}
                id = {[i,j]}
                updateGame = {this.props.updateGame}
              />);
            })}
          </div>)
        });

    return (
      <div className="grid">
        {builtGrid}

      </div>
    );
  }
}

export default Board;
