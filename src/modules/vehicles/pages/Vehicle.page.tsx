import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import VehiclePageHead from 'modules/vehicles/components/vehicle-page-head/VehiclePageHead.component';
import VehicleContent from 'modules/vehicles/components/vehicle-content/VehicleContent.component';
import Wrapper from 'components/wrapper/Wrapper.component';
import Loader from 'components/loader/Loader.component';
import { getVehicle } from 'modules/vehicles/store/vehicles.actions';
import { vehiclesSelector } from 'modules/vehicles/store/vehicles.selectors';

const Vehicle = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isLoading, currentVehicle } = useSelector(vehiclesSelector);

  useEffect(() => {
    dispatch(getVehicle(`${id}`));
  }, []);

  if (isLoading) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <VehiclePageHead currentVehicle={currentVehicle} />
      <VehicleContent currentVehicle={currentVehicle} />
    </Wrapper>
  );
};

export default Vehicle;
