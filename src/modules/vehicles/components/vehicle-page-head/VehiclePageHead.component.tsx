import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler } from 'react-hook-form';
import { Edit, Delete } from '@mui/icons-material';
import VehicleForm from 'modules/vehicles/components/vehicle-form/VehicleForm.component';
import { IVehicleForm } from 'modules/vehicles/components/vehicle-form/VehicleForm.types';
import Button from 'components/button/Button.component';
import PageHead from 'components/page-head/PageHead.component';
import Modal from 'components/modal/Modal.component';
import { deleteVehicle, updateVehicle } from 'modules/vehicles/store/vehicles.actions';
import { IVehiclePageHeadProps } from './VehiclePageHead.types';
import S from './VehiclePageHead.styles';

const VehiclePageHead: React.FC<IVehiclePageHeadProps> = ({ currentVehicle }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  if (!currentVehicle) {
    return null;
  }

  const { _id: id, name, type, lat, lng } = currentVehicle;

  const toggleModal = () => setIsOpen((state) => !state);

  const handleDeleteButtonClick = () => dispatch(deleteVehicle(id, navigate));

  const onSubmit: SubmitHandler<IVehicleForm> = (data) => {
    console.log(data);
    dispatch(updateVehicle<IVehicleForm>(id, data));

    toggleModal();
  };

  return (
    <PageHead caption={currentVehicle.name}>
      <S.ButtonsWrapper>
        <Button captionId="vehicles:update" icon={<Edit />} onClick={toggleModal} />
        <Button captionId="vehicles:delete" icon={<Delete />} onClick={handleDeleteButtonClick} danger />
      </S.ButtonsWrapper>

      <Modal isOpen={isOpen} toggle={toggleModal}>
        <VehicleForm onSubmit={onSubmit} defaultValues={{ name, type, lat, lng }} />
      </Modal>
    </PageHead>
  );
};

export default VehiclePageHead;
