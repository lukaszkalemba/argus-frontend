import { IBaseModel } from 'types/IBaseModel.type';

export enum URL {
  Vehicles = '/vehicles',
}

export interface IVehicle extends IBaseModel {
  city: string;
}

export interface IVehiclesState {
  isLoading: boolean;
  list: IVehicle[];
}
