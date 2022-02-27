import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Add } from '@mui/icons-material';
import VehicleForm from 'modules/vehicles/components/vehicle-form/VehicleForm.component';
import { IVehicleForm } from 'modules/vehicles/components/vehicle-form/VehicleForm.types';
import PageHead from 'components/page-head/PageHead.component';
import Modal from 'components/modal/Modal.component';
import { addVehicle } from 'modules/vehicles/store/vehicles.actions';
import S from './VehiclesPageHead.styles';

const VehiclesPageHead: React.FC = () => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen((state) => !state);

  const onSubmit: SubmitHandler<IVehicleForm> = async (data) => {
    dispatch(addVehicle<IVehicleForm>(data));

    toggleModal();
  };

  return (
    <PageHead caption={<FormattedMessage id="nav:vehicles" />}>
      <div>
        <S.CreateButton captionId="vehicles:add" icon={<Add />} onClick={toggleModal} />

        <Modal isOpen={isOpen} toggle={toggleModal}>
          <VehicleForm onSubmit={onSubmit} />
        </Modal>
      </div>
    </PageHead>
  );
};

export default VehiclesPageHead;
