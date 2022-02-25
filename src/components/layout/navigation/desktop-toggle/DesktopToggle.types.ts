import { INavigationBasicProps } from 'components/layout/navigation/Navigation.types';

export interface IDesktopToggleProps extends Omit<INavigationBasicProps, 'currentPage'> {}

export interface IToggleButtonProps {
  isOpen: boolean;
}
