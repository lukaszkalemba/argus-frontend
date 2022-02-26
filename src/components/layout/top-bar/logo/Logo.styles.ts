import styled from 'styled-components/macro';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.light};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  text-transform: uppercase;

  ${({ theme }) => theme.media.xl} {
    height: 49px;
    margin-bottom: 32px;
  }
`;

export default {
  Wrapper,
};
