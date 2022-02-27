import VehicleList from 'modules/vehicles/components/vehicle-list/VehicleList.component';
import VehiclesPageHead from 'modules/vehicles/components/vehicles-page-head/VehiclesPageHead.component';
import Wrapper from 'components/wrapper/Wrapper.component';

const Vehicles = () => (
  <Wrapper>
    <VehiclesPageHead />
    <VehicleList />
  </Wrapper>
);

export default Vehicles;
