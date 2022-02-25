import RequestService from 'services/request/Request.service';
import { createUrl } from 'helpers/createUrl.helper';
import { IVehicle, URL } from 'modules/vehicles/types/vehicles.types';

class VehiclesService {
  async getVehicles(): Promise<IVehicle[]> {
    const data = await RequestService.get<IVehicle[]>({ url: createUrl(URL.Vehicles) });

    return data;
  }
}

export default new VehiclesService();
