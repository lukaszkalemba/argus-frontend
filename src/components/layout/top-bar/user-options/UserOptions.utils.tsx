import { People, CreditCardOutlined, PowerSettingsNew, Person } from '@mui/icons-material';
import { Route } from 'types/enums/Route.enum';

export const userOptionsList = [
  {
    icon: <CreditCardOutlined />,
    captionId: 'user:subscription',
    path: Route.Subscription,
  },
  {
    icon: <Person />,
    captionId: 'user:account',
    path: Route.Account,
  },
  {
    icon: <People />,
    captionId: 'user:users',
    path: Route.Users,
  },
  {
    icon: <PowerSettingsNew />,
    captionId: 'user:logOut',
    handleAction: () => {
      console.log('TODO LOGOUT');
    },
  },
];
