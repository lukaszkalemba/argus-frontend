import { FormattedMessage } from 'react-intl';
import { IButtonProps } from './Button.types';
import S from './Button.styles';

const Button: React.FC<IButtonProps> = ({ captionId, type = 'button', icon, onClick, className, danger }) => (
  <S.Button onClick={onClick} danger={danger} type={type} className={className}>
    {icon}

    <span>
      <FormattedMessage id={captionId} />
    </span>
  </S.Button>
);

export default Button;
