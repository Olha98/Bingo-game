import React from 'react';
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
