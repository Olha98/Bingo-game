import styled, { css } from 'styled-components';

export const BingoBoardTable = styled.table`
  height: 80%;
  max-width: 800px;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) perspective(1500px) rotateX(25deg) rotateY(5deg);
  transition: 0.5s;
  z-index: 1;
  :hover {
    transform: translate(-50%, -50%) perspective(none) rotateX(0deg) rotateY(0deg);
  }
`;
export const BingoBoardTBody = styled.tbody``;

const selectedStyle = css`
  background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(7px);
`;

const winningStyle = css`
  background-color:#844eca;
`;

export const BingoRow = styled.tr``;
export const BingoCard = styled.td<{ isActive: boolean; selected?: any; center?: any; winning?: any }>`
  background: ${p => !p.selected && !p.winning && 'radial-gradient(#f588d8, #c0a3e5)'};
  ${({ selected }) => selected && selectedStyle}
  ${({ winning }) => winning && winningStyle}
  margin: 20px;
  padding: 10px;
  color: white;
  border-radius: 10px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.3s;
  position: relative;
  cursor: pointer;
  :after {
    --m-i: linear-gradient(#000, #000);
    --m-o: content-box, padding-box;
    display: ${p => (p.center ? 'inline-block' : 'none')};
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 5px;
    border-radius: 10px;
    background-image: linear-gradient(#591bc5, #f588d8, #c0a3e5, #591bc5);

    mask-image: var(--m-i), var(--m-i);
    mask-origin: var(--m-o);
    mask-clip: var(--m-o);
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
    filter: hue-rotate(0);
    animation: hue linear 500ms infinite;
    animation-play-state: paused;
  }

  p {
    text-align: center;
    text-transform: ${p => (p.center ? 'uppercase' : 'none')};
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-decoration: ${p => (p.isActive && !p.center ? 'line-through' : 'none')};
  }

  span {
    position: absolute;
    top: 10%;
    left: 85%;
  }

  :hover {
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
    transform: scale(1.01);
  }

  @keyframes strike {
    0% {
      width: 0;
    }
    50% {
      width: 100%;
    }
    100% {
      width: 0;
    }
  }
`;
