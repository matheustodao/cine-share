import { css } from 'styled-components';

export const buttonColors = {
  blue: css`
    --bg-color: ${({ theme }) => theme.colors.blue[700]};
    --text-color: ${({ theme }) => theme.colors.white};
  `,

  red: css`
    --bg-color: ${({ theme }) => theme.colors.red[500]};
    --text-color: ${({ theme }) => theme.colors.white};
  `,

  softGray: css`
    --bg-color: ${({ theme }) => theme.colors.grey[200]};
    --text-color: ${({ theme }) => theme.colors.grey[200]};
  `,
} as const;
