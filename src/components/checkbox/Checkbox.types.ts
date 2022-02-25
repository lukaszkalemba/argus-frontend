import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

export interface IStyledWrapperProps {
  $noSpacing: boolean;
  error: boolean;
  disabled: boolean;
}

export interface ICheckboxProps {
  captionId: string;
  error: FieldError | undefined;
  noSpacing?: boolean;
  disabled?: boolean;
  register: UseFormRegisterReturn;
}
