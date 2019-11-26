import React from 'react';
import * as Minesweeper from '../minesweeper.js';
import Board from './board';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: new Minesweeper.Board(8,8)
    }
    this.updateGame = this.updateGame.bind(this);
    this.gameOver = this.gameOver.bind(this);
    this.messageMethod = this.messageMethod.bind(this);
  }

  updateGame(tileObj, flagged) {
    if(flagged) {
      tileObj.toggleFlag();
    } else {
      tileObj.explore();
    }
    this.setState({board: this.state.board});
  }

  gameOver() {
    let {board} = this.state;
    if (board.lost() || board.won()) {
      return true;
    } else {
      return false;
    }
  }

  messageMethod() {
    let {board} = this.state;

    if(board.won()) {
      return "You won!";
    } else if (board.lost()) {
      return "You lost!";
    } else {
      return "";
    }
  }

  restartGame() {
    this.setState({board: new Minesweeper.Board(8, 8)});
  }

  render() {
    let shown = (this.gameOver() ? "modal shown" : "modal"); 
    let message = this.messageMethod();
    return (
      <>
        <div className={shown}>

          <h2>{message}</h2>
          <button>
            
            Play again
          </button>
        </div>
        <Board board={this.state.board} updateGame={this.updateGame} />
      </>
    );
  }
}

export default Game;