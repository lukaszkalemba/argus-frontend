import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IVehiclesState, IVehicle } from 'modules/vehicles/types/vehicles.types';

const initialState: IVehiclesState = {
  isLoading: false,
  currentVehicle: null,
  list: [],
};

const vehicles = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>): IVehiclesState => ({
      ...state,
      isLoading: payload,
    }),

    setCurrentVehicle: (state, { payload }: PayloadAction<IVehicle>): IVehiclesState => ({
      ...state,
      currentVehicle: payload,
    }),

    setVehicles: (state, { payload }: PayloadAction<IVehicle[]>): IVehiclesState => ({
      ...state,
      list: payload,
    }),
  },
});

export const { setLoading, setCurrentVehicle, setVehicles } = vehicles.actions;
export default vehicles.reducer;
