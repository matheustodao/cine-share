import styled from 'styled-components';
import { load } from './animations/load';
import { round } from './animations/round';

export const Loader = styled.div`
  color: ${({ theme }) => theme.colors.brand[600]};
  font-size: 90px;
  text-indent: -9999em;
  overflow: hidden;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  margin: 72px auto;
  position: relative;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: ${load} 1.7s infinite ease, ${round} 1.7s infinite ease;
  animation: ${load} 1.7s infinite ease, ${round} 1.7s infinite ease;
`;
