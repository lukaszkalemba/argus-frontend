import { IBaseModel } from 'types/IBaseModel.type';

export enum URL {
  Vehicles = '/vehicles',
}

export enum VehicleType {
  SUV = 'SUV',
  Truck = 'Truck',
  Hybrid = 'Hybrid',
}

export interface IVehicle extends IBaseModel {
  createdAt: string;
  name: string;
  type: VehicleType;
  lastGeoLocation: number[];
  lastConnection: string;
}

export interface IVehiclesState {
  isLoading: boolean;
  list: IVehicle[];
}
