import styled from 'styled-components/macro';

const Wrapper = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.positive3};
`;

export default { Wrapper };
