import React from 'react';
import * as Minesweeper from '../minesweeper.js';

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.revealed = this.revealed.bind(this);
  }

  handleClick(event){
    if(event.altKey) {
      console.log("I'm being flagged!");
      this.props.updateGame(this.props.tile, true);
    } else {
      console.log(`You clicked me! Ow! ${this.props.id}`);
      this.props.updateGame(this.props.tile, false);
    }
  }

  revealed(){
    return this.props.tile.explored ? 'tile revealed' : 'tile';
  }

  render() {
    let tileStr;
    let {bombed, flagged, explored} = this.props.tile;
    if (explored) {
      let bombCount = this.props.tile.adjacentBombCount();
      if(bombCount > 1 && !bombed) {
        tileStr = bombCount;
      } else if (bombed){
        tileStr = "💣";
      } else {
        tileStr = " ";
      }
    } else {
      if (flagged) {
        tileStr = "⛳";
      } else {
        tileStr = " ";
      }
    }

    let revealed = this.revealed();
    return (
    <p 
      className={revealed}
      onClick={this.handleClick}
    >{tileStr}</p>
    );
  }
}

export default Tile;
