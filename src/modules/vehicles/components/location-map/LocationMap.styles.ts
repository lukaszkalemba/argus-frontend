import styled from 'styled-components/macro';
import Tile from 'components/tile/Tile.component';

const Wrapper = styled(Tile)`
  width: 100%;
  min-height: 400px;

  > div > div {
    border-radius: 4px;
  }
`;

export default { Wrapper };
