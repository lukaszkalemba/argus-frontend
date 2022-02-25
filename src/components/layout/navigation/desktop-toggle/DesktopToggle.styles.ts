import styled from 'styled-components/macro';
import { IToggleButtonProps } from './DesktopToggle.types';

const ToggleButton = styled.button<IToggleButtonProps>`
  position: absolute;
  right: 0;
  bottom: 10%;
  border-radius: 50%;
  background-color: white;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  transform: translateX(50%);
  border: 2px solid;
  border-color: ${({ theme }) => theme.color.secondary};
  display: none;

  svg {
    color: ${({ theme }) => theme.color.secondary};
    transform: scale(1.5) ${({ isOpen }) => `rotate(${isOpen ? '180deg' : '0'})`};
    transition: transform 0.2s ease;
    height: auto;
  }

  ${({ theme }) => theme.media.xl} {
    display: flex;
  }
`;

export default {
  ToggleButton,
};
