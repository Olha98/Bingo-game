import React, { useEffect } from 'react';
import { useConfetti } from './hooks/useConfetti';

export const Confetti: React.FC<{ startCongrats: boolean }> = ({ startCongrats }) => {
  const { isActivated, setIsActivated } = useConfetti();
  useEffect(() => {
    if (startCongrats) {
      setIsActivated(true);
    } else {
      setIsActivated(false);
    }
  }, [startCongrats]);

  return <h1>Congratulations</h1>;
};
