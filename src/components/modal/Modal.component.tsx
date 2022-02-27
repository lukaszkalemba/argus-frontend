import { Modal as MuiModal } from '@mui/material';
import S from './Modal.styles';
import { IModalProps } from './Modal.types';

const Modal: React.FC<IModalProps> = ({ isOpen, toggle, children }) => (
  <MuiModal open={isOpen} onClose={toggle} component={S.Modal}>
    <S.ModalContent>{children}</S.ModalContent>
  </MuiModal>
);

export default Modal;
