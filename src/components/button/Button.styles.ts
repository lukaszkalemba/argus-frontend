import styled from 'styled-components/macro';
import { IButtonProps } from './Button.types';
import { setVariantStyle } from './Button.utils';

const Button = styled.button<Partial<IButtonProps>>`
  border-radius: 4px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 32px 5px 16px;
  border: 2px solid ${({ theme }) => theme.color.primary};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  opacity: ${({ disabled }) => disabled && 0.6};
  cursor: ${({ disabled }) => disabled && 'default'};

  ${({ variant }) => setVariantStyle(variant)}

  svg {
    font-size: ${({ theme }) => theme.font.size.l};
    margin-right: 8px;
  }

  ${({ theme }) => theme.media.md} {
    padding: 10px 32px 10px 16px;
  }
`;

export default {
  Button,
};
