import S from './Avatar.styles';
import { IAvatarProps } from './Avatar.types';

const Avatar: React.FC<IAvatarProps> = ({ src, alt, size = 'medium' }) => <S.Avatar src={src} alt={alt} size={size} />;

export default Avatar;
