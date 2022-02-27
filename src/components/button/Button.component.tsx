import { FormattedMessage } from 'react-intl';
import { IButtonProps } from './Button.types';
import S from './Button.styles';

const Button: React.FC<IButtonProps> = ({ captionId, icon, onClick, danger }) => (
  <S.Button onClick={onClick} danger={danger}>
    {icon}

    <span>
      <FormattedMessage id={captionId} />
    </span>
  </S.Button>
);

export default Button;
