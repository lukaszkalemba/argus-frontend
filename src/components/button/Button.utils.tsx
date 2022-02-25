import { Add, Edit } from '@mui/icons-material';
import { theme } from 'styles/theme';
import { ButtonActionTypes, ButtonVariants } from './Button.types';

interface IVaraintStyle {
  variant: ButtonVariants;
  style: string;
}

interface IButtonVariants {
  actionType?: ButtonActionTypes;
  variant: ButtonVariants;
  captionId: string;
  icon: JSX.Element;
}

const primaryStyle = `
  color: white;
  background: ${theme.color.primary};
`;

const secondaryStyle = `
  color: ${theme.color.primary};
  background: white;
`;

const variantsStyles: IVaraintStyle[] = [
  {
    variant: 'primary',
    style: primaryStyle,
  },
  {
    variant: 'secondary',
    style: secondaryStyle,
  },
];

const buttonVariants: IButtonVariants[] = [
  {
    actionType: 'add',
    variant: 'primary',
    captionId: 'common:add',
    icon: <Add />,
  },
  {
    actionType: 'edit',
    variant: 'secondary',
    captionId: 'common:edit',
    icon: <Edit />,
  },
];

// Set variant depending on button type
export const setVariant = (actionType?: ButtonActionTypes): ButtonVariants =>
  buttonVariants.find((button) => button.actionType === actionType)?.variant || 'primary';

// Set captionId depending on button type
export const setCaptionId = (actionType?: ButtonActionTypes): string =>
  buttonVariants.find((button) => button.actionType === actionType)?.captionId || '';

// Set icon depending on button type
export const setIcon = (actionType?: ButtonActionTypes): JSX.Element | null =>
  buttonVariants.find((button) => button.actionType === actionType)?.icon || null;

// Set styles depending on variant
export const setVariantStyle = (variant?: ButtonVariants): string =>
  variantsStyles.find((v) => v.variant === variant)?.style || primaryStyle;
