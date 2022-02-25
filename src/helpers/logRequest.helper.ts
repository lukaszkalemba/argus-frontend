import { Method } from 'axios';
import { isProduction } from 'config/config';
import { IData } from 'services/request/Request.types';

interface IProps<Model> {
  status: number;
  method: Method;
  url: string;
  data?: IData<Model>;
}

export const logRequest = <Model>({ status, method, url, data }: IProps<Model>) => {
  const { pathname } = new URL(url);

  if (!isProduction) {
    // eslint-disable-next-line no-console
    console.log(`${status} ${method} ${pathname}`, data);
  }
};
