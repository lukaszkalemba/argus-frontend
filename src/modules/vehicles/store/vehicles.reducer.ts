import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IVehiclesState, IVehicle } from 'modules/vehicles/types/vehicles.types';

const initialState: IVehiclesState = {
  isLoading: false,
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

    setVehicles: (state, { payload }: PayloadAction<IVehicle[]>): IVehiclesState => ({
      ...state,
      list: payload,
    }),
  },
});

export const { setVehicles, setLoading } = vehicles.actions;
export default vehicles.reducer;
