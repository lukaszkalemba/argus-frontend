import { lighten } from 'polished';
import styled from 'styled-components/macro';
import { IStyledTypeProps } from './VehicleList.types';
import { getTypeStyles } from './VehicleList.utils';

const TableRow = styled.tr`
  transition: all 150ms ease-in-out;
  :nth-child(2n) {
    background-color: ${({ theme }) => theme.color.background};
  }

  td {
    color: ${({ theme }) => theme.color.secondary};
  }

  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => lighten(0.33, theme.color.primary)};
  }
`;

const VehicleIdentifier = styled.td`
  display: none;

  ${({ theme }) => theme.media.sm} {
    display: block;
  }
`;

const VehicleName = styled.td`
  display: none;

  &.MuiTableCell-root {
    color: ${({ theme }) => theme.color.dark};
  }

  ${({ theme }) => theme.media.sm} {
    display: block;
  }
`;

const Type = styled.span<IStyledTypeProps>`
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

const VehicleCreatedAt = styled.td`
  display: none;

  ${({ theme }) => theme.media.sm} {
    display: block;
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.color.light};
  box-shadow: ${({ theme }) => theme.shadow.around};
  border-radius: 4px;
  overflow-x: scroll;

  .MuiTableCell-root {
    font-size: ${({ theme }) => theme.font.size.xs};
    font-family: ${({ theme }) => theme.font.family.primary};

    ${({ theme }) => theme.media.sm} {
      text-align: center;
    }
  }

  .MuiTableCell-head {
    color: ${({ theme }) => theme.color.accent.dark};
    text-transform: uppercase;
    font-weight: ${({ theme }) => theme.font.weight.medium};
  }
`;

const NoVehiclesInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: -20px;

  h3 {
    font-size: ${({ theme }) => theme.font.size.l};
    font-weight: ${({ theme }) => theme.font.weight.medium};
  }
`;

export default {
  TableRow,
  VehicleIdentifier,
  VehicleName,
  Type,
  VehicleCreatedAt,
  Wrapper,
  NoVehiclesInfo,
};
