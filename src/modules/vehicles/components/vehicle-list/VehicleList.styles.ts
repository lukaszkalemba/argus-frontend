import { lighten } from 'polished';
import styled from 'styled-components/macro';

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

const VehicleCreatedAt = styled.td`
  display: none;

  ${({ theme }) => theme.media.sm} {
    display: block;
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

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.color.light};
  box-shadow: ${({ theme }) => theme.shadow.around};
  border-radius: 4px;
  overflow-x: scroll;
  display: flex;
  flex-direction: column;

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

const Table = styled.table`
  display: flex;
  flex-grow: 1;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  margin-bottom: 15px;

  .MuiTablePagination-selectLabel,
  .MuiInputBase-root {
    display: none;
  }

  .MuiTablePagination-actions {
    color: ${({ theme }) => theme.color.secondary};
  }

  .MuiTablePagination-displayedRows {
    font-size: ${({ theme }) => theme.font.size.s};
    color: ${({ theme }) => theme.color.secondary};
    font-family: ${({ theme }) => theme.font.family.primary};
    font-weight: ${({ theme }) => theme.font.weight.medium};
  }

  .MuiToolbar-root {
    padding-top: 15px;
    overflow: hidden;
  }

  svg {
    width: 3.5rem;
    height: 3.5rem;
  }
`;

export default {
  TableRow,
  VehicleIdentifier,
  VehicleName,
  VehicleCreatedAt,
  NoVehiclesInfo,
  Wrapper,
  Table,
  Pagination,
};
