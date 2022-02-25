import { ButtonHTMLAttributes } from 'react';

export type ButtonActionTypes = 'add' | 'edit';
export type ButtonVariants = 'primary' | 'secondary';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  actionType?: ButtonActionTypes;
  variant?: ButtonVariants;
  captionId?: string;
  icon?: JSX.Element;
  onClick: () => void;
}
