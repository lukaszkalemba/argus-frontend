import styled from 'styled-components/macro';

const Marker = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${({ theme }) => theme.color.background};
  border: 3px solid ${({ theme }) => theme.color.primary};
  border-radius: 50%;
`;

export default { Marker };
