import VehicleList from 'modules/vehicles/components/vehicle-list/VehicleList.component';
import { Add } from '@mui/icons-material';
import PageHead from 'components/page-head/PageHead.component';
import Wrapper from 'components/wrapper/Wrapper.component';
import Button from 'components/button/Button.component';

const Vehicles = () => (
  <Wrapper>
    <PageHead>
      <Button captionId="vehicles:add" icon={<Add />} onClick={() => {}} />
    </PageHead>

    <VehicleList />
  </Wrapper>
);

export default Vehicles;
