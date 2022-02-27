import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LocationMap from 'modules/vehicles/components/location-map/LocationMap.component';
import PageHead from 'components/page-head/PageHead.component';
import Wrapper from 'components/wrapper/Wrapper.component';
import Loader from 'components/loader/Loader.component';
import { getVehicle } from 'modules/vehicles/store/vehicles.actions';
import { vehiclesSelector } from 'modules/vehicles/store/vehicles.selectors';

const Vehicle = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isLoading, currentVehicle } = useSelector(vehiclesSelector);

  useEffect(() => {
    dispatch(getVehicle(id || ''));
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
      <PageHead />
      <div>
        <h1>{currentVehicle?.name}</h1>
      </div>

      <LocationMap lat={13} lng={30} />
    </Wrapper>
  );
};

export default Vehicle;
