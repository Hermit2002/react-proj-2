import { useState } from "react";

export default function GameBoard({ onSelectSquare, board }) {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handlegameBoard(rowIndex, colIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedBoard = [
  //       ...prevGameBoard.map((innerArray) => [...innerArray]),
  //     ];
  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedBoard;
  //   });
  //   onSelectSquare();
  //   {
  //     /*this function helps in switching the players*/
  //   }
  // }

  // we commented out this code since we it was lacking the imformation of the order in which the buttons were clicked
  //which is important information for the log.

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null} // this will disable the button if the playerSymbol is not null.
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
