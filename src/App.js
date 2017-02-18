import React, { Component } from 'react';
import './App.css';

class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={() => alert('click')}>
      {this.props.value}
      </button>
    );
  }
}
class Board extends React.Component {
  renderSquare(i){
    return <Square />;
  }
  render() {
  const status = "Next Player: X";
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