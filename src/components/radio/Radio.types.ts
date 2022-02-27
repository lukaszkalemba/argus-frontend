import { UseFormRegisterReturn } from 'react-hook-form';

export interface IRadioProps {
  captionId: string;
  defaultValue: string;
  options: string[];
  register: UseFormRegisterReturn;
}
