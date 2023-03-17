import styled, { css } from 'styled-components';
import { media } from 'utils/stylesheet/breckpoints';

const selectedStyle = css`
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(7px);
`;

const winningStyle = css`
  background: var(gradient_purple_v2);
`;

export const BingoBoardTable = styled.table`
  max-width: 800px;
  width: 100%;
  height: 80%;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%) perspective(1500px) rotateX(25deg) rotateY(5deg);
  transition: 0.5s;
  z-index: 1;

  :hover {
    transform: translate(-50%, -50%) perspective(none) rotateX(0deg) rotateY(0deg);
  }

  @media ${media.md} {
    height: calc(100% - 200px);
    width: calc(100% - 150px);
  }

  @media ${media.sm} {
    width: calc(100% - 100px);
  }
`;

export const BingoCard = styled.td<{ isActive: boolean; selected?: any; center?: any; winning?: any }>`
  background: ${p => !p.selected && !p.winning && 'radial-gradient(#f588d8, #c0a3e5)'};
  ${({ selected }) => selected && selectedStyle}
  ${({ winning }) => winning && winningStyle}
  margin: 20px;
  padding: 10px;
  color: var(--white);
  border-radius: var(--base-radius);
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.3s;
  position: relative;
  cursor: pointer;

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
    background-image: var(--gradient_purple_v3);

    mask-image: var(--m-i), var(--m-i);
    mask-origin: var(--m-o);
    mask-clip: var(--m-o);
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
    filter: hue-rotate(0);
    animation: hue linear 500ms infinite;
    animation-play-state: paused;
  }

  :hover {
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
    transform: scale(1.01);
  }

  @media ${media.md} {
    padding: 9px;
  }

  @media ${media.sm} {
    padding: 5px;
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
