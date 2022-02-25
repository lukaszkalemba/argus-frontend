import styled from 'styled-components/macro';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.light};
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.shadow.around};
  width: 100%;
  height: 100%;
`;

export default { Wrapper };
