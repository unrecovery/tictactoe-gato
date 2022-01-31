import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./index.css";

const Square = (props) => {
  return (
    <buttton className="square" onClick={props.onClickEvent}>
      {props.value}
    </buttton>
  );
};

const Board = () => {
  const initialSquares = Array(9).fill(null);
  const [squares, setSquares] = useState(initialSquares);
  const [xIsNext, setXIsNext] = useState(true);

  const handleClickEvent = (i) => {
    const newSquare = [...squares];

    const winnerDeclared = Boolean(calculateWinner(newSquare));
    const squareFilled = Boolean(newSquare[i]);
    if (winnerDeclared || squareFilled) {
      return;
    }

    newSquare[i] = xIsNext ? "X" : "O";
    setSquares(newSquare);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (i) => {
    return (
      <Square value={squares[i]} onClickEvent={() => handleClickEvent(i)} />
    );
  };
  const winner = calculateWinner(squares);
  const status = winner
    ? `Ganador: ${winner}`
    : `Siguente Jugador: ${xIsNext ? "X" : "O"}`;

  return (
    <div>
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
    </div>
  );
};

const Game = () => {
  return (
    <div className="game">
      Tic Tac Toe (Gato)
      <Board />
    </div>
  );
};

ReactDOM.render(<Game />, document.getElementById("root"));

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // column
    [0, 4, 8],
    [2, 4, 6], //diagonals
  ];

  for (let line of lines) {
    const [a, b, c] = line;

    if (squares[a] && squares[a] === squares[b] && squares[a] == squares[c]) {
      return squares[a]; //'x' or 'o'
    }
  }
  return null;
}
/*const Square = (props) => {
  return (
    <buttton className="square" onClick={props.onClickEvent}>
      {props.value}
    </buttton>
  );
};

const Board = () => {
  const initialSquares = Array(9).fill(null);
  const [squares, setSquares] = useState(initialSquares);
  const [xIsNext, setXIsNext] = useState(true);

  const handleClickEvent = (i) => {
    const newSquare = [...squares];
    newSquare[i] = xIsNext ? "X" : "O";
    setSquares(newSquare);
    setXIsNext(!xIsNext);
  };
};

const renderSquare = (i) => {
  return <Square Value={squares[i]} onClickEvent={() => handleClickEvent(i)} />;
};

const status = `Siguente Jugador: ${xIsNext ? "X" : "O"}`;

return (
  <div
    style={{
      backgroundColor: "skyblue",
      margin: 10,
      padding: 20,
    }}
  >
    Borde
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
  </div>
);

const Game = () => {
  return (
    <div className="game">
      Tic Tac Toe
      <Board />
    </div>
  );
};

ReactDOM.render(<Game />, document.getElementById("root"));*/
