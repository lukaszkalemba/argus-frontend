import { ReactNode } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

export interface IInputProps {
  id?: string;
  type: 'text' | 'email' | 'password';
  captionId: string;
  error: FieldError | undefined;
  disabled?: boolean;
  noSpacing?: boolean;
  endIcon?: ReactNode;
  register: UseFormRegisterReturn;
}

export interface IStyledInputProps {
  $noSpacing: boolean;
  disabled: boolean;
}
