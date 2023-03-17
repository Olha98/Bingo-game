import styled from 'styled-components';

export const ResetButton = styled.button`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  outline: none;
  border: 5em;
  cursor: pointer;
  font-size: 1rem;
  color: var(--white);
  background-image: var(--gradient_purple_v1);
  padding: 0.7em 2em;
  border-radius: var(--base-radius);
  transition: box-shadow 0.25s;
  box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.438);
  -webkit-transform: translate(-50%, -50%);
  -webkit-transition: box-shadow 0.25s;

  :hover {
    box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.78);
  }

  @media (max-width: 735px) {
    font-size: 0.8rem;
  }
`;
