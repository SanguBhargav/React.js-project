import React, { useState } from "react";


export default function TicTacToe() {
  
  const [board, setBoard] = useState(Array(9).fill(null));

  const [isXTurn, setIsXTurn] = useState(true);

 
  function handleClick(index) {
    
    if (board[index] || calculateWinner(board)) return;

    const newBoard = [...board]; 
    newBoard[index] = isXTurn ? "X" : "O"; 
    setBoard(newBoard);
    setIsXTurn(!isXTurn); 
  }

  
  function calculateWinner(board) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(board);

  function resetGame() {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>XO Game</h1>

      <h2>
        {winner
          ? `Winner: ${winner}`
          : `Next Player: ${isXTurn ? "X" : "O"}`}
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 100px)",
          justifyContent: "center",
        }}
      >
        {board.map((value, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            style={{
              width: "100px",
              height: "100px",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            {value}
          </button>
        ))}
      </div>

      <br />
      <button onClick={resetGame}>Restart Game</button>
    </div>
  );
}
