import { IVehicleTypeProps } from './VehicleType.types';
import S from './VehicleType.styles';

const VehicleType: React.FC<IVehicleTypeProps> = ({ type, className }) => (
  <S.Wrapper type={type} className={className}>
    {type}
  </S.Wrapper>
);

export default VehicleType;
