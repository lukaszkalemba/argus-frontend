import styled, { css } from 'styled-components/macro';
import { IStyledIconButtonProps } from './IconButton.types';
import { sizes, variants } from './IconButton.utils';

const Button = styled.button<IStyledIconButtonProps>`
  ${({ variant }) => variants[variant]}
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  transition: color 0.1s ease;
  padding: 4px 0;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  span {
    ${({ size }) => sizes[size]}
    margin-right: 8px;
    text-align: center;
  }

  svg {
    transform: scale(1.2);
  }

  :hover {
    ${({ theme, disabled, variant, $type }) =>
      disabled
        ? css`
            pointer-events: none;
          `
        : css`
            color: ${variant === 'primary' ? theme.color.primary : theme.color.dark};
            text-decoration: ${$type !== 'button' ? 'underline' : 'none'};
          `}
  }
`;

export default {
  Button,
};
