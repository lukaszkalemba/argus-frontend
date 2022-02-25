import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CloseButton from './close-button/CloseButton.component';
import S from './Toasts.styles';

const ToastsProvider = () => (
  <S.Wrapper>
    <ToastContainer
      position="top-right"
      autoClose={3500}
      newestOnTop
      closeOnClick
      closeButton={CloseButton}
      pauseOnFocusLoss={false}
      draggable={false}
      pauseOnHover={false}
    />
  </S.Wrapper>
);

export default ToastsProvider;
