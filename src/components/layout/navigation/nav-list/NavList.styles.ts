import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import { IListGroupProps, INavListWrapperProps } from './NavList.types';

const NAVBAR_WIDTH = '240px';

const NavListWrapper = styled.nav<INavListWrapperProps>`
  transform: ${({ isOpen }) => `translate(${isOpen ? '0' : '100%'})`};
  transition: transform 0.2s ease;
  height: 100vh;
  position: fixed;
  min-width: ${NAVBAR_WIDTH};
  z-index: ${({ theme }) => theme.zIndex.positive2};
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.color.secondary};
  padding-bottom: 48px;

  > div {
    padding: 24px 0;
    color: white;
    height: 100%;
    overflow: auto;
  }

  ${({ theme }) => theme.media.xl} {
    display: block;
    position: static;
    transform: translate(0);
    padding: 0;
    min-width: ${({ isOpen }) => (isOpen ? NAVBAR_WIDTH : 'auto')};
    width: fit-content;

    > div {
      padding: 0;
    }
  }
`;

const LogoDesktopWrapper = styled.div`
  display: none;

  ${({ theme }) => theme.media.xl} {
    display: block;
    position: sticky;
    top: 0;
    z-index: ${({ theme }) => theme.zIndex.positive3};
  }
`;

const ListGroup = styled.div<INavListWrapperProps>`
  margin-bottom: 26px;

  h3 {
    font-size: ${({ theme }) => theme.font.size.xxs};
    font-weight: ${({ theme }) => theme.font.weight.medium};
    color: ${({ theme }) => theme.color.background};
    margin-bottom: 10px;
    padding: 0 24px;
    opacity: 0.75;
    width: 117px;

    ${({ theme }) => theme.media.xl} {
      text-align: ${({ isOpen }) => (isOpen ? 'left' : 'center')};
      padding: ${({ isOpen }) => (isOpen ? '0 24px' : '0 12px')};
    }
  }

  > svg {
    width: 20px;
    height: 20px;
  }

  :last-child {
    margin-bottom: 0;
  }
`;

const NavElement = styled(NavLink)<IListGroupProps>`
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  padding: 12px 24px;
  position: relative;
  background-color: ${({ $isSelected, theme }) => $isSelected && theme.color.hover};
  justify-content: ${({ $isOpen }) => ($isOpen ? 'flex-start' : 'center')};
  height: 42px;
  margin-bottom: 2px;

  svg {
    width: 20px;
    height: 20px;
  }

  :hover {
    background-color: ${({ theme }) => theme.color.hover};
  }

  :before {
    content: '';
    display: ${({ $isSelected }) => ($isSelected ? 'block' : 'none')};
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 3px;
    background: white;
    border-radius: 0 3px 3px 0;
  }

  span {
    display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
    font-weight: ${({ theme }) => theme.font.weight.medium};
    margin-left: 16px;
  }

  &:hover {
    span {
      position: ${({ $isOpen }) => !$isOpen && 'fixed'};
      left: ${({ $isOpen }) => !$isOpen && '100px'};
      background: ${({ $isOpen, theme }) => !$isOpen && theme.color.hover};
      display: ${({ $isOpen }) => !$isOpen && 'block'};
      white-space: nowrap;
      padding: ${({ $isOpen }) => !$isOpen && '13px 24px'};
      font-size: ${({ $isOpen, theme }) => !$isOpen && theme.font.size.xs};
      box-shadow: ${({ $isOpen, theme }) => !$isOpen && `1px 1px 1px 0px ${theme.color.border}`};
      height: ${({ $isOpen }) => !$isOpen && '42px'};
      border-radius: ${({ $isOpen }) => !$isOpen && '0 2px 2px 0'};
    }
  }
`;

export default {
  NavListWrapper,
  LogoDesktopWrapper,
  ListGroup,
  NavElement,
};
