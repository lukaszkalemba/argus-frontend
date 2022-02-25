import styled from 'styled-components/macro';

const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 48px;
  bottom: 0;
  left: 0;
  background-color: ${({ theme }) => theme.color.secondary};
  z-index: ${({ theme }) => theme.zIndex.positive3};
  display: flex;
  align-items: center;

  ${({ theme }) => theme.media.xl} {
    display: none;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.hover};
  padding: 0 16px;

  svg {
    color: white;
    width: 24px;
    height: 24px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      margin-right: 18px;
    }

    span {
      font-weight: ${({ theme }) => theme.font.weight.medium};
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    margin-right: -8px;
  }
`;

export default {
  Wrapper,
  Content,
};
