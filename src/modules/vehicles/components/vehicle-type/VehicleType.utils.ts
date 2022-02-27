import { css } from 'styled-components/macro';
import { VehicleType } from 'modules/vehicles/types/vehicles.types';

export const getTypeStyles = (type: VehicleType) => {
  switch (type) {
    case VehicleType.SUV:
      return css`
        background-color: ${({ theme }) => theme.color.warning.light};
        color: ${({ theme }) => theme.color.warning.dark};
        border-color: ${({ theme }) => theme.color.warning.dark};
      `;

    case VehicleType.Truck:
      return css`
        background-color: ${({ theme }) => theme.color.error.light};
        color: ${({ theme }) => theme.color.error.dark};
        border-color: ${({ theme }) => theme.color.error.dark};
      `;
    case VehicleType.Hybrid:
    default:
      return css`
        background-color: ${({ theme }) => theme.color.success.light};
        color: ${({ theme }) => theme.color.success.dark};
        border-color: ${({ theme }) => theme.color.success.dark};
      `;
  }
};
