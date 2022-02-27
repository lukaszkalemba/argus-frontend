import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Table, TableHead, TableRow, TableCell, TableBody, TableContainer } from '@mui/material';
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

  useEffect(() => {
    dispatch(getVehicles());
  }, []);

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
      <Table stickyHeader>
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
          {vehicles.map(({ _id, name, type, createdAt }, index) => (
            <TableRow component={S.TableRow} key={_id} onClick={() => navigate(`/${Route.Vehicles}/${_id}`)}>
              {!isBreakpoint && <TableCell component={S.VehicleIdentifier}>{index + 1}.</TableCell>}
              <TableCell component={S.VehicleName}>{name}</TableCell>
              <TableCell>
                <S.Type type={type}>{type}</S.Type>
              </TableCell>
              {!isBreakpoint && <TableCell component={S.VehicleCreatedAt}>{getDateWithHours(createdAt)}</TableCell>}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default VehicleList;
