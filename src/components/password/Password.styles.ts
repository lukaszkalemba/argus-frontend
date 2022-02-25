import styled from 'styled-components/macro';
import { IStyledToggleButtonProps } from './Password.types';

export const ToggleButton = styled.button<IStyledToggleButtonProps>`
  color: ${({ theme }) => theme.color.accent.dark};
  margin-top: 2px;

  svg {
    width: 18px;
    height: 18px;
  }

  :hover {
    color: ${({ theme, isError }) => (isError ? theme.color.error.dark : theme.color.primary)};
  }
`;

export default { ToggleButton };
