import React,{useState} from 'react'
import { calculateTie, calculateWinner } from './gameLogic';
import './TicTacToe.css'

const TicTacToe = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    const winner = calculateWinner(squares);
    const isTie = calculateTie(squares);

    const handleClick = (index)=>{
        if(squares[index] || winner)
            return;

        const newSquares = squares.slice();
        newSquares[index] = isXNext? 'X':'O';
        setSquares(newSquares);
        setIsXNext(!isXNext);
    };

    const rendersquare = (index)=>(
      <button className="square" onClick={() => handleClick(index)}>{squares[index]}</button>
    );

    const status = winner? `Winner: ${winner}`: isTie?"Its a Tie!" : `Next player: ${isXNext? 'X': 'O'}`;


  return (
    <div>
    <h1 className="msg">Tic Tac Toe Game</h1>
      <div className="status">{status}</div>
      <div className="board-row">
        {rendersquare(0)}
        {rendersquare(1)}
        {rendersquare(2)}
      </div>

      <div className="board-row">
        {rendersquare(3)}
        {rendersquare(4)}
        {rendersquare(5)}
      </div>

      <div className="board-row">
        {rendersquare(6)}
        {rendersquare(7)}
        {rendersquare(8)}
      </div>
    </div>
  )
}

export default TicTacToe
