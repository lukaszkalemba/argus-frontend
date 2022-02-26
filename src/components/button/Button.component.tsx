import { FormattedMessage } from 'react-intl';
import { IButtonProps } from './Button.types';
import S from './Button.styles';

const Button: React.FC<IButtonProps> = ({ captionId, icon, onClick }) => (
  <S.Button onClick={onClick}>
    {icon}

    <span>
      <FormattedMessage id={captionId} />
    </span>
  </S.Button>
);

export default Button;
