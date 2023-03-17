import React from 'react';
import * as S from './style';

export const ResetButton: React.FC<{ resetGame?: any }> = ({ resetGame }) => {
  return (
    <S.ResetButton onClick={resetGame}>
      <span className="bn39span">Reset Game</span>
    </S.ResetButton>
  );
};
