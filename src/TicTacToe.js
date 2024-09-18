import React, { useState } from 'react';
import { calculateTie, calculateWinner } from './gameLogic';
import './TicTacToe.css';

const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const winner = calculateWinner(squares);
  const isTie = calculateTie(squares);

  const handleClick = (index) => {
    if (squares[index] || winner) return;

    const newSquares = squares.slice();
    newSquares[index] = isXNext ? 'X' : 'O';
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };


  const resetGame = () => {
    setSquares(Array(9).fill(null)); 
    setIsXNext(true); 
  };

  const renderSquare = (index) => (
    <button className="square" onClick={() => handleClick(index)}>
      {squares[index]}
    </button>
  );

  const status = winner
    ? `Winner: ${winner}`
    : isTie
    ? "It's a Tie!"
    : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div>
      <h1 className="msg">Tic Tac Toe Game</h1>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>

      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>

      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>

      <button id="resetBtn" onClick={resetGame}>
        Reset
      </button>
    </div>
  );
};

export default TicTacToe;

