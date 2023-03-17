import React, { Fragment } from 'react';
import { Confetti } from 'components/atoms/Confetti';
import { ResetButton } from 'components/atoms/ResetButton';
import { useCheckWin } from './hooks/useCheckWin';
import { WriteBoard } from '../WriteBoard';
import * as S from './style';

export const BingoBoard: React.FC<{ board: any }> = ({ board }) => {
  const { selected, setSelected, wins, startCongrats, resetGame } = useCheckWin();

  const handleClick = (number: number) => {
    if (!selected.includes(number)) {
      setSelected([...selected, number]);
    } else {
      setSelected(selected.filter(num => num !== number));
    }
  };

  return (
    <Fragment>
      <Confetti startCongrats={startCongrats} />
      <ResetButton resetGame={resetGame} />
      <WriteBoard wins={wins} />
      <S.BingoBoardTable>
        <tbody>
          {board?.map((row, i) => (
            <tr key={i}>
              {row?.map((num, j) => {
                const isSelected = selected.includes(num.index);
                const isWinning = wins.flat().includes(num.index);
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
            </tr>
          ))}
        </tbody>
      </S.BingoBoardTable>
    </Fragment>
  );
};
