import { IInputProps } from 'components/input/Input.types';

export interface IPasswordProps extends Omit<IInputProps, 'type'> {
  id: string;
}

export interface IStyledToggleButtonProps {
  isError: boolean;
}
