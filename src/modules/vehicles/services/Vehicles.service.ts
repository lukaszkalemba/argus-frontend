import RequestService from 'services/request/Request.service';
import { createUrl } from 'helpers/createUrl.helper';
import { IVehicle, URL } from 'modules/vehicles/types/vehicles.types';

class VehiclesService {
  async getVehicle(id: string): Promise<IVehicle> {
    const data = await RequestService.get<IVehicle>({ url: createUrl(URL.Vehicle, { id }) });

    return data;
  }

  async addVehicle<T>(payload: T): Promise<void> {
    await RequestService.post({ url: createUrl(URL.Vehicles), payload });
  }

  async updateVehicle<T>(id: string, payload: T): Promise<void> {
    await RequestService.patch({ url: createUrl(URL.Vehicle, { id }), payload });
  }

  async deleteVehicle(id: string): Promise<void> {
    await RequestService.delete({ url: createUrl(URL.Vehicle, { id }) });
  }

  async getVehicles(): Promise<IVehicle[]> {
    const data = await RequestService.get<IVehicle[]>({ url: createUrl(URL.Vehicles) });

    return data;
  }
}

export default new VehiclesService();
