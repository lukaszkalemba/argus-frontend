import styled from 'styled-components/macro';
import { ISearchMobileWrapperProps } from './Search.types';

const SearchButtonMobileWrapper = styled.div`
  display: flex;

  ${({ theme }) => theme.media.xl} {
    display: none;
  }
`;

const SearchForm = styled.form<ISearchMobileWrapperProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${({ theme }) => theme.zIndex.positive2};
  padding: 0 16px;
  justify-content: space-between;
  align-items: center;
  background: white;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};

  > * {
    height: 36px;

    ${({ theme }) => theme.media.xl} {
      height: 38px;
    }
  }

  div {
    position: relative;
    width: 100%;
    margin-right: 16px;

    svg {
      position: absolute;
      display: flex;
      top: 50%;
      left: 16px;
      transform: translateY(-50%);
      font-size: 20px;
      cursor: pointer;
    }

    input {
      border-radius: 4px;
      height: 100%;
      padding: 0 16px 0 44px;
      width: 100%;
      outline: none;
      border: 1px solid ${({ theme }) => theme.color.border};
      background: ${({ theme }) => theme.color.background};
      font-size: ${({ theme }) => theme.font.size.s};
      font-weight: ${({ theme }) => theme.font.weight.medium};

      ::placeholder {
        color: ${({ theme }) => theme.color.dark};
      }

      ${({ theme }) => theme.media.xl} {
        width: 228px;
      }
    }
  }

  button {
    background-color: ${({ theme }) => theme.color.primary};
    font-weight: ${({ theme }) => theme.font.weight.medium};
    border-radius: 4px;
    color: white;
    padding: 0 12px;
  }

  ${({ theme }) => theme.media.xl} {
    position: static;
    display: flex;
    padding-left: 20px;

    button {
      display: none;
    }
  }
`;

export default {
  SearchButtonMobileWrapper,
  SearchForm,
};
