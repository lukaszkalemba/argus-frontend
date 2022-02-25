import { AppThunk } from 'store/store.types';
import VehiclesService from 'modules/vehicles/services/Vehicles.service';
import { setVehicles } from './vehicles.reducer';

export const getVehicles = (): AppThunk => async (dispatch) => {
  const data = await VehiclesService.getVehicles();

  dispatch(setVehicles(data));
};
