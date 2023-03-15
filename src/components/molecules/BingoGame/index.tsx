import React from 'react';
import { BingoBoard } from '../BingoBoard';
import db from '../../../db.json';

export const BingoGame = () => {
  console.log(db);
  // Define the range of numbers to db choose from
  const numbers = Array.from({ length: 25 }, (_, i) => i);

  // Create the 5x5 bingo board with consecutive numbers
  const board = [];
  for (let i = 0; i < 5; i++) {
    const row = [];

    for (let j = 0; j < 5; j++) {
      // if (i === 2 && j === 2) {
      //   // Center square is free
      //   // row.push('Free');
      //   row.push(12);
      // } else {
      const num = i * 5 + j;

      row.push({ cells: num, content: '' });
      // }
    }
    board.push(row);
  }
  console.log(board, 'board');
  return <div>{/* <BingoBoard board={board} /> */}</div>;
};
