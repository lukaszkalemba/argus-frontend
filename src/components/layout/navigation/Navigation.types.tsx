import { ICurrentPage } from 'components/layout/navigation/nav-list/NavList.utils';

export const LOCAL_STORAGE_NAV_STATE = 'navigationOpen';

export interface INavigationBasicProps {
  isOpen: boolean;
  toggleOpen: () => void;
  currentPage: ICurrentPage;
}
