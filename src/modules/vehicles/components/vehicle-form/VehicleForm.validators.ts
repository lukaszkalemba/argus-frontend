import * as yup from 'yup';
import { VehicleType } from 'modules/vehicles/types/vehicles.types';

export const addVehicleSchema = yup.object().shape({
  name: yup.string().required('addVehicle:nameRequired'),
  type: yup.string().oneOf([VehicleType.Hybrid, VehicleType.SUV, VehicleType.Truck]).required(),
  lat: yup.number().typeError('addVehicle:latRequired').required('addVehicle:latRequired'),
  lng: yup.number().typeError('addVehicle:lngRequired').required('addVehicle:lngRequired'),
});
