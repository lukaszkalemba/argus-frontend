import styled from 'styled-components/macro';
import { IVehicleTypeProps } from './VehicleType.types';
import { getTypeStyles } from './VehicleType.utils';

const Wrapper = styled.span<IVehicleTypeProps>`
  ${({ type }) => getTypeStyles(type)}
  padding: 4px 20px;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  border: 1px solid;

  ${({ theme }) => theme.media.sm} {
    padding: 4px 40px;
  }
`;

export default { Wrapper };
