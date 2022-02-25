import { Method } from 'axios';
import { IToast } from 'services/toast/Toast.types';

export interface IData<T> {
  data: T;
  error: {
    message: string;
    statusCode: number;
    details?: unknown;
  };
  toast?: IToast;
}

export interface IBasicRequest {
  url: string;
  onError?: () => void;
}

export interface IPayloadRequest<Payload> extends IBasicRequest {
  payload: Payload;
}

export interface IFinalRequest<Payload> extends IBasicRequest {
  payload?: Payload;
  method: Method;
}
