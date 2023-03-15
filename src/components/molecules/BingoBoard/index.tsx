import React, { useEffect } from 'react';
import { useState } from 'react';
import * as S from './style';

export const BingoBoard: React.FC<{ board: any }> = ({ board }) => {
  const [calledNumbers, setCalledNumbers] = useState([]);
  const [isWin, setIsWin] = useState(false);
  const isActiveCell = num => (calledNumbers.includes(Number(num)) ? 'green' : 'white');

  const handleClick = (e: any) => {
    const id = Number(e.target.id);

    if (!calledNumbers.includes(id)) {
      setCalledNumbers([...calledNumbers, id]);
    } else {
      setCalledNumbers(calledNumbers.filter(num => num !== id));
    }
  };

  const checkWin = () => {
    for (let i = 0; i < 5; i++) {
      // filtering for rows
      if (calledNumbers.filter(n => Math.floor(n / 5) === i).length === 5) {
        setIsWin(true);
        return;
      }

      // filtering for columns
      if (calledNumbers.filter(n => n % 5 === i).length === 5) {
        setIsWin(true);
        return;
      }

      // filtering for diagonals from top-left to bottom-right
      if (calledNumbers.filter(n => n % 6 === i).length === 5) {
        console.log('here');
        setIsWin(true);
        return;
      }
      // filtering for diagonals from top-right to bottom-left

      if (calledNumbers.filter(n => n % 4 === 0 && n !== 0 && n !== 24).length === 5) {
        console.log('here');
        setIsWin(true);
        return;
      }
      setIsWin(false);
    }
  };
  useEffect(() => {
    checkWin();
    console.log(isWin, 'isWin');
  }, [calledNumbers, isWin]);

  return (
    <S.BingoBoardTable>
      <tbody>
        {board.map((row, i) => (
          <tr key={i}>
            {row.map((num, j) => (
              <td key={`${i}-${j}`} id={num} onClick={e => handleClick(e)} style={{ background: isActiveCell(num) }}>
                {num}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </S.BingoBoardTable>
  );
};
