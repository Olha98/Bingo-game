import React from 'react';
import { useState } from 'react';
import * as S from './style';

export const BingoBoard: React.FC<{ board: any }> = ({ board }) => {
  const [active, seActive] = useState([]);

  const checkSteps = (e: any) => {
    console.log(e.target.id, 'id');

    seActive([...active, Number(e.target.id)]);
  };

  return (
    <S.BingoBoardTable>
      <tbody>
        {board.map((row, i) => (
          <tr key={i}>
            {row.map((num, j) => (
              <td key={`${i}-${j}`} id={num} onClick={e => checkSteps(e)} style={{ background: active.includes(Number(num)) ? 'green' : 'white' }}>
                {num}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </S.BingoBoardTable>
  );
};
