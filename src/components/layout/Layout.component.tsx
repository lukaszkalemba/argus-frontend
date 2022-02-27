import { Navigate, Route, Routes } from 'react-router-dom';
import { Route as AppRoute } from 'types/enums/Route.enum';
import Navigation from 'components/layout/navigation/Navigation.component';
import TopBar from 'components/layout/top-bar/TopBar.component';
import Vehicles from 'modules/vehicles/pages/Vehicles.page';
import Vehicle from 'modules/vehicles/pages/Vehicle.page';
import S from './Layout.styles';

const Layout = () => (
  <S.Wrapper>
    <Navigation />

    <S.VerticalWrapper>
      <TopBar />

      <Routes>
        <Route path={AppRoute.Vehicles} element={<Vehicles />} />
        <Route path={AppRoute.Vehicle} element={<Vehicle />} />
        <Route path="*" element={<Navigate to={AppRoute.Vehicles} replace />} />
      </Routes>
    </S.VerticalWrapper>
  </S.Wrapper>
);

export default Layout;
