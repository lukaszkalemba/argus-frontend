import styled from 'styled-components/macro';

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;

  ${({ theme }) => theme.media.xl} {
    margin: 0;
  }
`;

const VerticalWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Content = styled.main`
  padding: 40px;
  background-color: ${({ theme }) => theme.color.light};
  box-shadow: ${({ theme }) => theme.shadow.around};
  height: 100%;
  margin: 30px;
  border-radius: 4px;
`;

export default {
  Wrapper,
  VerticalWrapper,
  Content,
};
