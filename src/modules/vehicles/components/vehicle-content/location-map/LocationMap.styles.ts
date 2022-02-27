import styled from 'styled-components/macro';
import Tile from 'components/tile/Tile.component';

const Wrapper = styled(Tile)`
  display: block;
  width: 100%;

  > div > div {
    border-radius: 4px;
  }

  ${({ theme }) => theme.media.md} {
    width: 50%;
  }
`;

export default { Wrapper };
