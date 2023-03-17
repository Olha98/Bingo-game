import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

export const useConfetti = () => {
  const [isActivated, setIsActivated] = useState(false);
  const end = Date.now() + 15 * 100;
  const colors = ['#c0a3e5', '#a20578', '#2811a6'];

  useEffect(() => {
    if (isActivated) {
      (function frame() {
        confetti({
          particleCount: 2,
          angle: 60,
          spread: 25,
          origin: { x: 0 },
          colors: colors
        });
        confetti({
          particleCount: 2,
          angle: 120,
          spread: 25,
          origin: { x: 1 },
          colors: colors
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
      confetti.reset();
    }
  }, [isActivated]);

  return { isActivated, setIsActivated };
};
