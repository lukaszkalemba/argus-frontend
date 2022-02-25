import { CloseButtonProps } from 'react-toastify';
import { Close } from '@mui/icons-material';

const CloseButton = ({ closeToast }: CloseButtonProps) => (
  <button type="button" onClick={closeToast}>
    <Close />
  </button>
);

export default CloseButton;
