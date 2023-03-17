import styled from 'styled-components';

export const ResetButton = styled.button`
  border: 5em;
  cursor: pointer;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  outline: none;
  font-size: 1rem;
  -webkit-transform: translate(-50%, -50%);
  background-image: linear-gradient(45deg, #4568dc, #b06ab3);
  padding: 0.7em 2em;
  border-radius: 10px;
  box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.438);
  -webkit-transition: box-shadow 0.25s;
  transition: box-shadow 0.25s;
  color: white;
  :hover {
    box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.78);
  }

  @media (max-width: 735px) {
    font-size: 0.8rem;
  }
`;
