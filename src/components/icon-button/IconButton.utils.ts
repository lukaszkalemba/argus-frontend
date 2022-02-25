import { css } from 'styled-components/macro';

export const variants = {
  primary: css`
    color: ${({ theme }) => theme.color.secondary};
  `,
  secondary: css`
    color: ${({ theme }) => theme.color.accent.dark};
  `,
};

export const sizes = {
  small: css`
    font-size: ${({ theme }) => theme.font.size.xxxs};
  `,
  medium: css`
    font-size: ${({ theme }) => theme.font.size.xxs};
  `,
};
