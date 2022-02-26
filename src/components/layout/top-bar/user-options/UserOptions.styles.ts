import styled from 'styled-components/macro';
import { IOptionsProps } from './UserOptions.types';

const UserImage = styled.div`
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.color.secondary};

    ${({ theme }) => theme.media.xl} {
      width: 30px;
      height: 30px;
    }
  }

  ${({ theme }) => theme.media.xl} {
    margin-right: 8px;
  }
`;

const OptionsList = styled.ul<IOptionsProps>`
  padding-top: 10px;
  position: absolute;
  right: 0;
  bottom: -6px;
  background: ${({ theme }) => theme.color.light};
  border-radius: 4px;
  list-style-type: none;
  transform: translateY(100%);
  box-shadow: ${({ theme }) => theme.shadow.around};
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  min-width: 160px;
`;

const ListItem = styled.li`
  a {
    display: flex;
    align-items: center;
    margin: 0 10px 0px;
    padding: 9px 8px;
    cursor: pointer;
    white-space: nowrap;
    text-decoration: none;

    span {
      font-weight: ${({ theme }) => theme.font.weight.medium};
      font-size: ${({ theme }) => theme.font.size.xs};
    }
  }

  * {
    color: ${({ theme }) => theme.color.secondary};
  }

  svg {
    margin-right: 12px;
    transform: scale(1.2);
  }

  :nth-child(3) {
    a {
      margin-bottom: 6px;
    }
  }

  :last-child {
    border-top: 1px solid ${({ theme }) => theme.color.border};

    a {
      margin: 6px 10px;
      padding: 8px;
    }
  }
`;

const Wrapper = styled.div<IOptionsProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      white-space: nowrap;
      margin-right: 10px;
      color: ${({ theme }) => theme.color.dark};
      font-weight: ${({ theme }) => theme.font.weight.medium};
      display: none;

      ${({ theme }) => theme.media.xl} {
        display: block;
      }
    }

    svg {
      font-size: 24px;
      transform: ${({ isOpen }) => `rotate(${isOpen ? '180deg' : '0'})`};
      transition: transform 0.2s ease;
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 6px;
    }
  }
`;

export default {
  UserImage,
  OptionsList,
  ListItem,
  Wrapper,
};
