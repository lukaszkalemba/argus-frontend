import { FormattedMessage } from 'react-intl';
import { IInputProps } from './Input.types';
import S from './Input.styles';

const Input: React.FC<IInputProps> = ({
  id,
  type,
  captionId,
  error,
  disabled = false,
  noSpacing = false,
  endIcon,
  register,
}) => {
  const errorCaptionId = error?.message;

  return (
    <S.Input
      id={id}
      variant="outlined"
      label={<FormattedMessage id={captionId} />}
      type={type}
      disabled={disabled}
      error={!!errorCaptionId}
      $noSpacing={noSpacing}
      helperText={errorCaptionId && <FormattedMessage id={errorCaptionId} />}
      autoComplete="on"
      InputProps={{
        endAdornment: endIcon,
      }}
      {...register}
    />
  );
};

export default Input;
