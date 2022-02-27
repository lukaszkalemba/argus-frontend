import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Table, TableHead, TableRow, TableCell, TableBody, TableContainer, TablePagination } from '@mui/material';
import VehicleType from 'modules/vehicles/components/vehicle-type/VehicleType.component';
import { Route } from 'types/enums/Route.enum';
import useBreakpoint from 'hooks/useBreakpoint.hook';
import { getDateWithHours } from 'helpers/getDateWithHours.helper';
import Loader from 'components/loader/Loader.component';
import { getVehicles } from 'modules/vehicles/store/vehicles.actions';
import { vehiclesSelector } from 'modules/vehicles/store/vehicles.selectors';
import S from './VehicleList.styles';

const VehicleList = () => {
  const dispatch = useDispatch();
  const { list: vehicles, isLoading } = useSelector(vehiclesSelector);
  const navigate = useNavigate();
  const { isBreakpoint } = useBreakpoint(768);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(isBreakpoint ? 5 : 10);

  useEffect(() => {
    dispatch(getVehicles());
  }, []);

  useEffect(() => {
    setRowsPerPage(isBreakpoint ? 5 : 10);
  }, [isBreakpoint]);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (!vehicles.length) {
    return (
      <S.Wrapper>
        <S.NoVehiclesInfo>
          <h3>
            <FormattedMessage id="vehicles:noVehicles" />
          </h3>
        </S.NoVehiclesInfo>
      </S.Wrapper>
    );
  }

  return (
    <TableContainer component={S.Wrapper}>
      <Table stickyHeader component={S.Table}>
        <TableHead>
          <TableRow>
            {!isBreakpoint && (
              <TableCell>
                <FormattedMessage id="vehicles:id" />
              </TableCell>
            )}
            <TableCell>
              <FormattedMessage id="vehicles:name" />
            </TableCell>
            <TableCell>
              <FormattedMessage id="vehicles:type" />
            </TableCell>
            {!isBreakpoint && (
              <TableCell>
                <FormattedMessage id="vehicles:createdAt" />
              </TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {vehicles
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map(({ _id, name, type, createdAt }, index) => (
              <TableRow component={S.TableRow} key={_id} onClick={() => navigate(`/${Route.Vehicles}/${_id}`)}>
                {!isBreakpoint && <TableCell component={S.VehicleIdentifier}>{index + 1}.</TableCell>}
                <TableCell component={S.VehicleName}>{name}</TableCell>
                <TableCell>
                  <VehicleType type={type} />
                </TableCell>
                {!isBreakpoint && <TableCell component={S.VehicleCreatedAt}>{getDateWithHours(createdAt)}</TableCell>}
              </TableRow>
            ))}
        </TableBody>
      </Table>

      <TablePagination
        component={S.Pagination}
        count={vehicles.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
      />
    </TableContainer>
  );
};

export default VehicleList;
