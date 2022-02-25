type Variant = 'primary' | 'secondary';
type Size = 'small' | 'medium';

export interface IStyledIconButtonProps {
  $type: 'button' | 'internal-link' | 'external-link';
  variant: Variant;
  size: Size;
  disabled?: boolean;
}

export type ButtonProps = {
  type: 'button';
  onClick: () => void;
};

export type InternalLinkProps = {
  type: 'internal-link';
  to: string;
};

export type ExternalLinkProps = {
  type: 'external-link';
  to: string;
};

export type IconButtonProps = (ButtonProps | InternalLinkProps | ExternalLinkProps) & {
  variant?: Variant;
  size?: Size;
  captionId: string;
  icon: JSX.Element;
  disabled?: boolean;
};
