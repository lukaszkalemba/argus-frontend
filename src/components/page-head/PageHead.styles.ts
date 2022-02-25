import styled from 'styled-components/macro';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  > h2 {
    font-size: ${({ theme }) => theme.font.size.l};
    font-weight: ${({ theme }) => theme.font.weight.medium};
    margin-bottom: 16px;

    ${({ theme }) => theme.media.md} {
      font-size: ${({ theme }) => theme.font.size.xl};
      margin-bottom: 0;
    }
  }

  ${({ theme }) => theme.media.md} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }
`;

export default {
  Wrapper,
};
