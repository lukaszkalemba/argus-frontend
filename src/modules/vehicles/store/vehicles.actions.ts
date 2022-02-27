import { AppThunk } from 'store/store.types';
import VehiclesService from 'modules/vehicles/services/Vehicles.service';
import { setCurrentVehicle, setLoading, setVehicles } from './vehicles.reducer';

export const getVehicle =
  (id: string): AppThunk =>
  async (dispatch) => {
    dispatch(setLoading(true));

    const data = await VehiclesService.getVehicle(id);

    dispatch(setCurrentVehicle(data));
    dispatch(setLoading(false));
  };

export const getVehicles = (): AppThunk => async (dispatch) => {
  dispatch(setLoading(true));

  const data = await VehiclesService.getVehicles();

  dispatch(setVehicles(data));
  dispatch(setLoading(false));
};
