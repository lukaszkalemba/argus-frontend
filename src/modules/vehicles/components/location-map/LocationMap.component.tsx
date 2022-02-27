import GoogleMapReact from 'google-map-react';
import { APP_GOOGLE_MAPS_API_KEY, DEFAULT_MAP_ZOOM } from 'config/config';
import LocationMapMarker from './location-map-marker/LocationMapMarker.component';
import { ILocationMapProps } from './LocationMap.types';
import S from './LocationMap.styles';

const LocationMap = ({ lat, lng }: ILocationMapProps) => (
  <S.Wrapper>
    <GoogleMapReact
      bootstrapURLKeys={{ key: APP_GOOGLE_MAPS_API_KEY }}
      defaultCenter={{ lat, lng }}
      defaultZoom={DEFAULT_MAP_ZOOM}
    >
      <LocationMapMarker lat={lat} lng={lng} />
    </GoogleMapReact>
  </S.Wrapper>
);

export default LocationMap;
