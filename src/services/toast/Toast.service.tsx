import { FormattedMessage } from 'react-intl';
import { toast } from 'react-toastify';
import { Report, CheckCircle, Warning, Info } from '@mui/icons-material';
import { IToast } from './Toast.types';

class ToastService {
  private getIcon(type: IToast['type']) {
    switch (type) {
      case 'success':
        return <CheckCircle />;

      case 'warning':
        return <Warning />;

      case 'error':
        return <Report />;

      case 'info':
      default:
        return <Info />;
    }
  }

  public push({ type, captionId, timeout }: IToast) {
    toast(<FormattedMessage id={captionId} />, {
      icon: this.getIcon(type),
      className: `toast-${type}`,
      autoClose: timeout,
    });
  }
}

export default new ToastService();
