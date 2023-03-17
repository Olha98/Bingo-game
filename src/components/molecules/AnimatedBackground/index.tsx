import React from 'react';
import * as S from './style';

export const AnimatedBackground = () => {
  const emptyArray = new Array(10).fill('');

  const animateButton = e => {
    e.preventDefault;
    e.target.classList.remove('animate');

    e.target.classList.add('animate');
    setTimeout(function () {
      e.target.classList.remove('animate');
    }, 200);
  };
  
  let className = document.getElementsByClassName('bubbly-button');
  for (let i = 0; i < className.length; i++) {
    className[i].addEventListener('click', animateButton, false);
  }

  return (
    <S.AnimatedBackgroundWrapper>
      {emptyArray.map(key => (
        <div className="cube" key={key} />
      ))}
    </S.AnimatedBackgroundWrapper>
  );
};
