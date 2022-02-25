import { FormattedMessage } from 'react-intl';
import { IButtonProps } from './Button.types';
import S from './Button.styles';
import { setCaptionId, setIcon, setVariant } from './Button.utils';

const Button: React.FC<IButtonProps> = ({
  actionType,
  variant = setVariant(actionType),
  captionId = setCaptionId(actionType),
  icon = setIcon(actionType),
  ...props
}) => (
  <S.Button variant={variant} {...props}>
    {icon}

    <span>
      <FormattedMessage id={captionId} />
    </span>
  </S.Button>
);

export default Button;
