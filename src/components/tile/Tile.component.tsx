import S from './Tile.styles';
import { ITileProps } from './Tile.types';

const Tile: React.FC<ITileProps> = ({ className, children }) => <S.Wrapper className={className}>{children}</S.Wrapper>;

export default Tile;
