import styled from 'styled-components';
import { media } from 'utils/stylesheet/breckpoints';

export const BingoBoardWrapper = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  background: linear-gradient(132deg, #fc415a, #591bc5, #212335);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;

  @media ${media.md} {
    padding: 0 20px;
  }
`;
