import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import VehicleList from 'modules/vehicles/components/vehicle-list/VehicleList.component';
import PageHead from 'components/page-head/PageHead.component';
import Wrapper from 'components/wrapper/Wrapper.component';
import { getVehicles } from 'modules/vehicles/store/vehicles.actions';

const Vehicles = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVehicles());
  }, []);

  return (
    <Wrapper>
      <PageHead
        captionId="nav:vehicles"
        button={{
          onClick: () => {
            console.log('TODO: add');
          },
          actionType: 'add',
        }}
      />

      <VehicleList />
    </Wrapper>
  );
};

export default Vehicles;
