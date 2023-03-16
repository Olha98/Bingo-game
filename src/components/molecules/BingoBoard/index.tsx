import React, { useEffect } from 'react';
import { useState } from 'react';
import party from 'party-js';
import _ from 'lodash';
import * as S from './style';

export const BingoBoard: React.FC<{ board: any }> = ({ board }) => {
  const [numbers, setNumbers] = useState(Array.from({ length: 25 }, (_, i) => i));
  const [selected, setSelected] = useState([]);
  const [wins, setWins] = useState([]);
  // const [activeCells, setActiveCells] = useState([]);

  const handleClick = number => {
    if (!selected.includes(number)) {
      setSelected([...selected, number]);
      // console.log(activeCells, 'vactiveCells');
    } else {
      setSelected(selected.filter(num => num !== number));
    }
  };

  const checkWin = () => {
    const newWins = [];
    console.log(newWins, 'vvHHHHHHHHHH');
    for (let i = 0; i < 5; i++) {
      // Check rows
      if (selected.filter(n => Math.floor(n / 5) === i).length === 5) {
        newWins.push(selected.filter(n => Math.floor(n / 5) === i));
      }
      // Check columns
      if (selected.filter(n => n % 5 === i).length === 5) {
        newWins.push(selected.filter(n => n % 5 === i));
      }
    }
    // Check diagonal from top-left to bottom-right
    if (selected.filter(n => n % 6 === 0).length === 5) {
      newWins.push(selected.filter(n => n % 6 === 0));
    }
    // Check diagonal from top-right to bottom-left
    if (selected.filter(n => n % 4 === 0 && n !== 0 && n !== 24).length === 5) {
      newWins.push(selected.filter(n => n % 4 === 0 && n !== 0 && n !== 24));
    }

    if (newWins.length > wins.length) {
      setWins(newWins);
    }
    console.log(wins, 'Wiiins');
    console.log(wins.concat(newWins));

    // setActiveCells(wins.concat(newWins)[0]);
  };

  const resetGame = () => {
    setNumbers(Array.from({ length: 25 }, (_, i) => i));
    setSelected([]);
    setWins([]);
  };
  useEffect(() => {
    console.log(selected, 'selected');
    // if (selected.length < 0) {
    checkWin();
    // }
  }, [selected]);

  useEffect(() => {
    // console.log(_.flatten(wins), 'ffnnfnf');
    console.log(wins, 'wins');
  }, [wins]);

  return (
    <>
      <button onClick={resetGame}>Reset Game</button>
      <div className="button">Click me!</div>
      {wins.length > 0 && (
        <div>
          <h2>You have {wins.length} bingos!</h2>
          {wins.map((win, i) => (
            <div key={i}>
              <h3>Bingo {i + 1}</h3>
              <ul>
                {win.map(n => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
      {/* _.flatten(wins).includes(Number(num.index)) */}
      <S.BingoBoardTable>
        <S.BingoBoardTBody>
          {board?.map((row, i) => (
            <S.BingoRow key={i}>
              {row?.map((num, j) => {
                const isSelected = selected.includes(num.index);
                const isWinning = wins.flat().includes(num.index);
                console.log(wins.flat(), 'kk');
                console.log(wins.flat().includes(num.index), 'vvvvv');
                // console.log(isSelected, 'isSelected');
                const isCenter = i === 2 && j === 2;
                return (
                  <S.BingoCard
                    key={`${i}-${j}`}
                    center={isCenter}
                    selected={isSelected}
                    winning={isWinning}
                    onClick={() => handleClick(num.index)}
                    isActive={selected.includes(Number(num.index))}
                  >
                    <span>{num.index}</span>
                    <p>{num.content}</p>
                  </S.BingoCard>
                );
              })}
            </S.BingoRow>
          ))}
        </S.BingoBoardTBody>
      </S.BingoBoardTable>
    </>
  );
};
