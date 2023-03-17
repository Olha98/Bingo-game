import React from 'react';
import * as S from './style';

export const WriteBoard: React.FC<{ wins?: any }> = ({ wins }) => {
  return (
    <S.WriteBoardNavigation role="navigation">
      {wins?.length > 0 && (
        <ul id="menu">
          <h2>You have {wins.length} bingos!</h2>
          {wins.map((win, i) => (
            <li key={i}>
              <a href="#">
                <h3>Bingo {i + 1}</h3>
              </a>
            </li>
          ))}
        </ul>
      )}
    </S.WriteBoardNavigation>
  );
};
