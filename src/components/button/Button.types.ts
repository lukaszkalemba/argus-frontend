import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  captionId: string;
  icon?: ReactNode;
  onClick: () => void;
  danger?: boolean;
}
