import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { API_URL } from 'config/config';
import ToastService from 'services/toast/Toast.service';
import { IToast } from 'services/toast/Toast.types';
import { logRequest } from 'helpers/logRequest.helper';
import { IData, IBasicRequest, IPayloadRequest, IFinalRequest } from './Request.types';

class RequestService {
  instance: AxiosInstance;

  constructor() {
    this.instance = axios.create();

    this.instance.defaults.baseURL = `${API_URL}/api/v0`;
    this.instance.defaults.headers.common = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    this.instance.defaults.timeout = 2000;
  }

  async get<Model>({ url, onError }: IBasicRequest): Promise<Model> {
    const { data }: IData<Model> = await this.request<Model>({ method: 'GET', url, onError });

    return data;
  }

  async post<Model, Payload>({ url, payload, onError }: IPayloadRequest<Payload>): Promise<Model> {
    const { data }: IData<Model> = await this.request<Model, Payload>({ method: 'POST', url, payload, onError });

    return data;
  }

  async patch<Model, Payload>({ url, payload, onError }: IPayloadRequest<Payload>): Promise<Model> {
    const { data }: IData<Model> = await this.request<Model, Payload>({ method: 'PATCH', url, payload, onError });

    return data;
  }

  async delete({ url, onError }: IBasicRequest): Promise<void> {
    await this.request({ method: 'DELETE', url, onError });
  }

  private async request<Model, Payload = {}>({
    method,
    url,
    onError,
    payload,
  }: IFinalRequest<Payload>): Promise<IData<Model>> {
    try {
      const { status, data, request }: AxiosResponse<IData<Model>> = await this.instance(url, {
        method,
        data: payload,
      });

      logRequest<Model>({
        status,
        method,
        url: request.responseURL,
        data,
      });

      this.handleToast(data?.toast);

      return data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const { response, request } = err;

        logRequest<Model>({
          status: request.status,
          method,
          url: request.responseURL,
          data: response?.data,
        });

        this.handleToast(response?.data?.toast);
      }

      if (onError) {
        onError();
      }

      return Promise.reject(err);
    }
  }

  private handleToast(toast?: IToast) {
    if (toast) {
      ToastService.push({ ...toast });
    }
  }
}

export default new RequestService();
