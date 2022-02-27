import { FormattedMessage } from 'react-intl';
import ContentTile from './content-tile/ContentTile.component';
import LocationMap from './location-map/LocationMap.component';
import { IVehicleContentProps } from './VehicleContent.types';
import S from './VehicleContent.styles';

const VehicleContent: React.FC<IVehicleContentProps> = ({ currentVehicle }) => {
  if (!currentVehicle) {
    return (
      <S.Wrapper>
        <S.NoVehicleInfo>
          <h3>
            <FormattedMessage id="vehicles:noVehicle" />
          </h3>
        </S.NoVehicleInfo>
      </S.Wrapper>
    );
  }

  return (
    <S.Wrapper>
      <ContentTile currentVehicle={currentVehicle} />
      <LocationMap lat={currentVehicle.lat} lng={currentVehicle.lng} />
    </S.Wrapper>
  );
};

export default VehicleContent;
