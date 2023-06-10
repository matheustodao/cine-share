import styled, { css } from 'styled-components';
import { ButtonStyles } from 'types/presentation/button';
import { buttonColors } from './variants/colors';

export const ButtonStyled = styled.button<ButtonStyles>(({
  theme, isoutline, schemacolor, loading,
}) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 1.6rem 2.4rem;
  background: var(--bg-color);
  color: var(--text-color);
  position: relative;

  border: none;

  font-family: ${theme.fonts.title.family};
  font-weight: ${theme.fonts.title.weight.bold};
  font-size: 1.5rem;

  border-radius: ${theme.rounded.medium};

  text-decoration: none !important;

  cursor: pointer;

  transition: all 0.350s ease-in;

  ${isoutline === 'true' && css`
    background: transparent;
    border: 1px solid var(--bg-color);
    border-color: var(--bg-color);
    color: var(--bg-color);
  `}

  .content {
    display: ${loading === 'true' ? 'none' : 'flex'};
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 0.8rem;
  }

  :disabled, :focus-visible {
    &, :hover {
      filter: brightness(0.8);
      cursor: not-allowed;
    }
  }

  :hover, :focus-visible {
    filter: brightness(1.1);
  }

  :active {
    filter: brightness(0.9);
  }

  ${buttonColors[schemacolor ?? 'blue']};
`);
