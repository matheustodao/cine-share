import styled, { css } from 'styled-components';
import { ButtonStyles } from 'types/presentation/button';
import { buttonColors } from './variants/colors';

export const ButtonStyled = styled.button<ButtonStyles>(({
  theme, isoutline, schemaColor, loading,
}) => css`
  ${buttonColors[schemaColor ?? 'blue']};

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1.6rem 2.4rem;
  background: var(--bg-color);
  color: var(--text-color);

  border: none;

  font-family: ${theme.fonts.title.family};
  font-weight: ${theme.fonts.title.weight.bold};
  font-size: 1.5rem;

  border-radius: ${theme.rounded.large};

  cursor: pointer;

  transition: all 0.350s ease;

  ${isoutline === 'true' && css`
    background: transparent;
    border: 1px solid var(--bg-colors);
    color: var(--bg-colors);
  `}

  .content {
    display: ${loading === 'true' ? 'none' : 'inline'};
  }

  :disabled, :focus-visible {
    &, :hover {
      filter: brightness(0.8);
      cursor: not-allowed;
    }
  }

  :hover, :focus-visible {
    filter: brightness(1.02);
  }
`);
