import React from 'react';
import { AnimatedBackground } from '../AnimatedBackground';
import { BingoBoard } from '../BingoBoard';
import db from '../../../db/db';
import * as S from './style';

export const BingoGame = () => {
  
  // Create the 5x5 bingo board with consecutive numbers
  const board = [];
  for (let i = 0; i < 5; i++) {
    const row = [];
    for (let j = 0; j < 5; j++) {
      const num = i * 5 + j;
      row.push({ index: num, content: db[num].excuse });
    }
    board.push(row);
  }

  return (
    <S.BingoBoardWrapper>
      <AnimatedBackground />
      <BingoBoard board={board} />
    </S.BingoBoardWrapper>
  );
};
