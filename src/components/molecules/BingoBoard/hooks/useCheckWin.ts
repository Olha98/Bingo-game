import React, { useEffect, useState } from 'react';

export const useCheckWin = () => {
  const [selected, setSelected] = useState([]);
  const [wins, setWins] = useState([]);
  const [startCongrats, setStartCongrats] = useState(false);

  const checkWin = () => {
    const newWins = [];

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
    if (selected.filter(n => n % 6 === 0).length === 4) {
      newWins.push(selected.filter(n => n % 6 === 0));
    }
    // Check diagonal from top-right to bottom-left
    if (selected.filter(n => n % 4 === 0 && n !== 0 && n !== 24).length === 4) {
      newWins.push(selected.filter(n => n % 4 === 0 && n !== 0 && n !== 24));
    }

    if (newWins.length > wins.length) {
      setWins(newWins);
      setStartCongrats(true);
    } else {
      setStartCongrats(false);
    }
  };

  const resetGame = () => {
    setSelected([]);
    setWins([]);
  };

  useEffect(() => {
    checkWin();
  }, [selected]);

  return {
    selected,
    setSelected,
    wins,
    startCongrats,
    resetGame
  };
};
