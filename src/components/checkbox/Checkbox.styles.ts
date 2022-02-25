import styled from 'styled-components/macro';
import { rgba } from 'polished';
import { IStyledWrapperProps } from './Checkbox.types';

const Wrapper = styled.span<IStyledWrapperProps>`
  position: relative;
  margin-bottom: ${({ $noSpacing }) => ($noSpacing ? '0' : '20px')};

  .MuiTypography-root {
    font-family: ${({ theme }) => theme.font.family.primary};
    font-size: ${({ theme }) => theme.font.size.xxs};
    color: ${({ theme, error }) => (error ? `${theme.color.error.dark} !important` : theme.color.accent.dark)};
    font-weight: ${({ theme }) => theme.font.weight.medium};
    margin-left: 3px;
  }

  .MuiCheckbox-root {
    padding: 5px;

    &.Mui-checked {
      color: ${({ theme }) => theme.color.primary};
    }
  }

  .MuiSvgIcon-root {
    width: 22px;
    height: 22px;
  }

  div.icon {
    padding: 3px;
    width: 22px;
    height: 22px;

    span {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 2px;
      border: 1px solid ${({ theme, error }) => (error ? theme.color.error.dark : rgba(theme.color.accent.dark, 0.65))};
      ${({ theme, error, disabled }) => !error && disabled && `border-color: ${rgba(theme.color.accent.dark, 0.3)};`}
    }
  }

  .MuiFormControlLabel-root {
    margin-left: -8px;
    margin-right: 0;

    &:hover {
      .MuiCheckbox-root {
        background-color: ${({ theme, error, disabled }) =>
          error || disabled ? 'transparent' : rgba(theme.color.primary, 0.15)};
      }

      div.icon span {
        ${({ theme, error, disabled }) => !error && !disabled && `border-color: ${theme.color.primary};`}
      }
    }
  }
`;

const Error = styled.span`
  position: absolute;
  display: block;
  font-size: ${({ theme }) => theme.font.size.xxxs};
  color: ${({ theme }) => theme.color.error.dark};
  margin-left: 0;
  top: 87%;
`;

export default { Wrapper, Error };
