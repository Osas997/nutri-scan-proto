import { useState } from "react";
import Square from "./components/Square";

function Board() {
   const [squares, setSquares] = useState(Array(9).fill(null));

   const handleClick = (i) => {
      const nextSquares = squares.slice();
      nextSquares[i] = "X";
      setSquares(nextSquares);
      console.log(nextSquares);
   };

   const squareItems = [];

   for (let i = 0; i < 9; i++) {
      squareItems.push(
         <Square
            key={i}
            onSquareClick={() => handleClick(i)}
            value={squares[i]}
         />
      );
   }

   return (
      <>
         <h1>Game Apaan Dah ?</h1>
         <div className="wrapper">
            <div className="board">{squareItems}</div>
         </div>
      </>
   );
}

export default Board;
