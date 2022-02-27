import { Route } from 'types/enums/Route.enum';
import { AppThunk } from 'store/store.types';
import ToastService from 'services/toast/Toast.service';
import VehiclesService from 'modules/vehicles/services/Vehicles.service';
import { setCurrentVehicle, setLoading, setVehicles } from './vehicles.reducer';

export const getVehicles = (): AppThunk => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    const data = await VehiclesService.getVehicles();
    dispatch(setVehicles(data));

    dispatch(setLoading(false));
  } catch (error) {
    ToastService.push({ type: 'error', captionId: 'vehicle:getVehiclesFailed' });
    dispatch(setLoading(false));
  }
};

export const getVehicle =
  (id: string): AppThunk =>
  async (dispatch) => {
    dispatch(setLoading(true));

    try {
      const data = await VehiclesService.getVehicle(id);
      dispatch(setCurrentVehicle(data));

      dispatch(setLoading(false));
    } catch (error) {
      ToastService.push({ type: 'error', captionId: 'vehicle:getVehicleFailed' });
      dispatch(setLoading(false));
    }
  };

export const addVehicle =
  <T>(payload: T): AppThunk =>
  async (dispatch) => {
    dispatch(setLoading(true));

    try {
      await VehiclesService.addVehicle<T>(payload);
      dispatch(setLoading(false));

      ToastService.push({ type: 'success', captionId: 'vehicle:created' });
    } catch (error) {
      ToastService.push({ type: 'error', captionId: 'vehicle:addFailed' });
      dispatch(setLoading(false));
    }

    dispatch(getVehicles());
  };

export const updateVehicle =
  <T>(id: string, payload: T): AppThunk =>
  async (dispatch) => {
    dispatch(setLoading(true));

    try {
      await VehiclesService.updateVehicle<T>(id, payload);
      dispatch(getVehicle(id));

      dispatch(setLoading(false));

      ToastService.push({ type: 'success', captionId: 'vehicle:updated' });
    } catch (error) {
      ToastService.push({ type: 'error', captionId: 'vehicle:updateFailed' });
      dispatch(setLoading(false));
    }

    dispatch(getVehicles());
  };

export const deleteVehicle =
  (id: string, navigate: (path: string) => void): AppThunk =>
  async (dispatch) => {
    dispatch(setLoading(true));

    try {
      await VehiclesService.deleteVehicle(id);
      dispatch(setLoading(false));

      ToastService.push({ type: 'success', captionId: 'vehicle:deleted' });

      navigate(Route.Vehicles);
    } catch (error) {
      ToastService.push({ type: 'error', captionId: 'vehicle:deleteFailed' });
      dispatch(setLoading(false));
    }
  };
