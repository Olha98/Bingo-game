import React from 'react';
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
  let animateButton = function (e) {
    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');

    e.target.classList.add('animate');
    setTimeout(function () {
      e.target.classList.remove('animate');
    }, 700);
  };
  let classname = document.getElementsByClassName('bubbly-button');
  for (let i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', animateButton, false);
  }

  return (
    <S.BingoBoardWrapper>
      <BingoBoard board={board} />
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
    </S.BingoBoardWrapper>
  );
};
