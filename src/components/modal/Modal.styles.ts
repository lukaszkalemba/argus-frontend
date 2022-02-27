import styled from 'styled-components/macro';

const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &.MuiModal-root {
    z-index: ${({ theme }) => theme.zIndex.positive9};
  }
`;

const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.color.light};
  padding: 40px;
  width: 100%;
  max-width: 400px;
  border-radius: 4px;
`;

export default { Modal, ModalContent };
