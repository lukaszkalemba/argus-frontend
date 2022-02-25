import styled from 'styled-components/macro';

const Wrapper = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 68px 24px;

  ${({ theme }) => theme.media.xl} {
    margin: 24px 36px 36px;
  }
`;

export default {
  Wrapper,
};
