import { getDateWithHours } from 'helpers/getDateWithHours.helper';
import { IContentTileProps } from './ContentTile.types';
import S from './ContentTile.styles';

const ContentTile = ({ currentVehicle }: IContentTileProps) => (
  <S.Wrapper>
    <S.Paragraphs>
      <p>
        Type: <span>{currentVehicle.type}</span>
      </p>
      <p>
        Created at: <span>{getDateWithHours(currentVehicle.createdAt)}</span>
      </p>
      <p>
        Last Connection: <span>{getDateWithHours(currentVehicle.lastConnection)}</span>
      </p>
      <p>
        Coordinates:{' '}
        <span>
          {currentVehicle.lat} lat, {currentVehicle.lng} lng
        </span>
      </p>
    </S.Paragraphs>

    <div />
  </S.Wrapper>
);

export default ContentTile;
