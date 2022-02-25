import { DirectionsCar } from '@mui/icons-material';
import { Route } from 'types/enums/Route.enum';

export const navList = [
  {
    categoryTitle: 'nav:general',
    navElements: [
      {
        icon: <DirectionsCar />,
        title: 'nav:vehicles',
        path: Route.Vehicles,
      },
    ],
  },
];

export interface ICurrentPage {
  icon: JSX.Element;
  title: string;
}

export const DEFAULT_PAGE: ICurrentPage = {
  icon: <div />,
  title: '',
};
