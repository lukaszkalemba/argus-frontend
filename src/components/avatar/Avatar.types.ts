export type ImgSizes = 'small' | 'medium';

export interface IAvatarProps {
  src: string;
  alt?: string;
  size?: ImgSizes;
}
