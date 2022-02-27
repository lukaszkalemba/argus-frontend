import { SubmitHandler } from 'react-hook-form';
import { VehicleType } from 'modules/vehicles/types/vehicles.types';

export interface IVehicleForm {
  name: string;
  type: VehicleType;
  lng: number;
  lat: number;
}

export interface IVehicleFormProps {
  onSubmit: SubmitHandler<IVehicleForm>;
  defaultValues?: Partial<IVehicleForm>;
}
