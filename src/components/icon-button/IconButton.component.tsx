import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { ButtonProps, IconButtonProps, ExternalLinkProps, InternalLinkProps } from './IconButton.types';
import S from './IconButton.styles';

const IconButton: React.FC<IconButtonProps> = ({
  type = 'button',
  variant = 'secondary',
  size = 'small',
  captionId,
  icon,
  disabled,
  ...props
}) => {
  const content = (
    <>
      <span>
        <FormattedMessage id={captionId} />
      </span>

      {icon}
    </>
  );

  switch (type) {
    case 'external-link':
      return (
        <S.Button
          as="a"
          href={(props as ExternalLinkProps).to}
          target="_blank"
          rel="noopener noreferrer"
          variant={variant}
          size={size}
          $type={type}
          disabled={disabled}
        >
          {content}
        </S.Button>
      );

    case 'internal-link':
      return (
        <S.Button
          as={Link}
          to={(props as InternalLinkProps).to}
          variant={variant}
          size={size}
          $type={type}
          disabled={disabled}
        >
          {content}
        </S.Button>
      );

    case 'button':
    default:
      return (
        <S.Button
          variant={variant}
          size={size}
          $type={type}
          onClick={(props as ButtonProps).onClick}
          disabled={disabled}
        >
          {content}
        </S.Button>
      );
  }
};

export default IconButton;
