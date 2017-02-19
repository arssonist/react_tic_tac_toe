import React, { Component } from 'react';
import './App.css';


//STATE
// - add the constructor to use state
// - subclasses need super()
// - event hooks into setState
// - this.state is passed in instead of props

// First intance of Sqaure as a regular Component that handles state
// class Square extends React.Component {
//   constructor(){
//     super();
//     this.state = {
//     value: null,
//     };
//   }
//   render() {
//     return (
//       <button className="square" onClick={() => this.props.onClick()}>
//         {this.props.value}
//     </button>
//     );
//   }
// }

// Change the Sqaure to a func stateless comp, that only accepts props and no state
function Square(props){
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  )
}

class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null),
      xisNext: true,
    };
  }
  renderSquare(i){
    // bring state down out of square into board
     return <Square
      //  return and <Component Must be on same line
    value={this.state.squares[i]}
  onClick={() => this.handleClick(i)} />


  }
  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
 });
    }
  render() {
  const status = 'Next Player: ' + (this.setState.xIsNext ? 'x' : 'O') ;
    return (
        <div className="board">
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
            <Board />
        </div>
        <div className="game-info">
          <div></div>
          <ol></ol>
        </div>
      </div>
    )
  }
}

export default Game;
