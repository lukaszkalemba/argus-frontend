import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Edit, Delete } from '@mui/icons-material';
import ToastService from 'services/toast/Toast.service';
import Button from 'components/button/Button.component';
import PageHead from 'components/page-head/PageHead.component';
import { deleteVehicle } from 'modules/vehicles/store/vehicles.actions';
import { IVehiclePageHeadProps } from './VehiclePageHead.types';
import S from './VehiclePageHead.styles';

const VehiclePageHead: React.FC<IVehiclePageHeadProps> = ({ id, name }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteButtonClick = () => {
    dispatch(deleteVehicle(`${id}`, navigate));

    ToastService.push({ type: 'success', captionId: 'vehicle:deleted' });
  };

  return (
    <PageHead caption={name}>
      <S.ButtonsWrapper>
        <Button captionId="vehicles:update" icon={<Edit />} onClick={() => {}} />
        <Button captionId="vehicles:delete" icon={<Delete />} onClick={handleDeleteButtonClick} danger />
      </S.ButtonsWrapper>
    </PageHead>
  );
};

export default VehiclePageHead;
