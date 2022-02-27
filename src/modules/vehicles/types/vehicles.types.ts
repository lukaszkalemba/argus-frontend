import { IBaseModel } from 'types/IBaseModel.type';

export enum URL {
  Vehicles = '/vehicles',
  Vehicle = '/vehicles/:id',
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
  lat: number;
  lng: number;
  lastConnection: string;
}

export interface IVehiclesState {
  isLoading: boolean;
  currentVehicle: IVehicle | null;
  list: IVehicle[];
}
