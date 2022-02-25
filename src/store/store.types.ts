import { Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { IVehiclesState } from 'modules/vehicles/types/vehicles.types';

export interface IStoreState {
  vehicles: IVehiclesState;
}

export type AppThunk = ThunkAction<void, IStoreState, unknown, Action<string>>;
