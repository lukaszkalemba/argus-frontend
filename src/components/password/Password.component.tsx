import { useCallback, useEffect } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import useToggle from 'hooks/useToggle.hook';
import Input from 'components/input/Input.component';
import { IPasswordProps } from './Password.types';
import S from './Password.styles';

const Password: React.FC<IPasswordProps> = ({ id, captionId, error, noSpacing, disabled, register }) => {
  const [isPasswordVisible, toggleIsPasswordVisible] = useToggle(false);

  useEffect(() => {
    const element: unknown = document.getElementById(id);

    if (element && element instanceof HTMLInputElement) {
      element.selectionStart = element.value.length;
      element.selectionEnd = element.value.length;
    }
  }, [isPasswordVisible]);

  const handleClick = useCallback(() => {
    toggleIsPasswordVisible(() => document.getElementById(id)?.focus());
  }, []);

  return (
    <Input
      id={id}
      type={isPasswordVisible ? 'text' : 'password'}
      captionId={captionId}
      error={error}
      disabled={disabled}
      noSpacing={noSpacing}
      endIcon={
        <S.ToggleButton isError={!!error?.message} type="button" onClick={handleClick}>
          {isPasswordVisible ? <VisibilityOff /> : <Visibility />}
        </S.ToggleButton>
      }
      register={register}
    />
  );
};

export default Password;
