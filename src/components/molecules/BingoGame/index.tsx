import React, { useState, useEffect } from 'react';
import { BingoBoard } from '../BingoBoard';
// import BingoBoard from './BingoBoard';
// import BingoCard from './BingoCard';

export const BingoGame = () => {
  // Define the range of numbers to choose from
  const numbers = Array.from({ length: 25 }, (_, i) => i);

  // Create the 5x5 bingo board with consecutive numbers
  const board = [];
  for (let i = 0; i < 5; i++) {
    const row = [];
    
    for (let j = 0; j < 5; j++) {
      if (i === 2 && j === 2) {
        // Center square is free
        row.push('Free');
      } else {
        const num = i * 5 + j;
        row.push(num);
      }
    }
    board.push(row);

  }

  return (
    <div>
      <p>hello</p>
      <BingoBoard board={board} />
    </div>
  );
};
