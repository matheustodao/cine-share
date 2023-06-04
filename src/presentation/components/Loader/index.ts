import styled from 'styled-components';
import { LoaderStyles } from 'types/presentation/loader';
import { load } from './animations/load';
import { round } from './animations/round';

export const Loader = styled.div<LoaderStyles>`
  color: ${({ theme }) => theme.colors.brand[200]};
  font-size: ${({ size }) => (size ? `${size}px` : '15px')};
  text-indent: -9999em;
  overflow: hidden;
  width: 1em !important;
  height: 1em !important;
  border-radius: 50%;
  position: relative;
  -webkit-animation: ${load} 1.7s infinite ease, ${round} 1.7s infinite ease;
  animation: ${load} 1.7s infinite ease, ${round} 1.7s infinite ease;
`;
