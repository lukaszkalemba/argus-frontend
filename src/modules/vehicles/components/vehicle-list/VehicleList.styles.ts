import styled from 'styled-components/macro';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  box-shadow: ${({ theme }) => theme.shadow.around};
  border-radius: 4px;
  padding: 20px;
`;

export default {
  Wrapper,
};
