import { ButtonHTMLAttributes } from 'react';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  captionId: string;
  icon?: JSX.Element;
  onClick: () => void;
}
