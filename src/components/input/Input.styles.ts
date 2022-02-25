import styled from 'styled-components/macro';
import { TextField } from '@mui/material';
import { rgba } from 'polished';
import { IStyledInputProps } from './Input.types';

const Input = styled(TextField)<IStyledInputProps>`
  width: 100%;
  margin-bottom: ${({ $noSpacing }) => ($noSpacing ? '0' : '28px !important')};

  .MuiInputBase-input {
    font-family: ${({ theme }) => theme.font.family.primary};
    font-size: ${({ theme }) => theme.font.size.s};
    padding: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: ${({ theme }) => theme.font.weight.medium};
    color: ${({ theme }) => theme.color.dark};
  }

  .MuiOutlinedInput-root {
    font-family: ${({ theme }) => theme.font.family.primary};
    color: ${({ theme }) => theme.color.dark};

    .MuiOutlinedInput-notchedOutline {
      border-color: ${({ theme, disabled, error }) =>
        disabled && !error ? `${rgba(theme.color.accent.dark, 0.3)} !important` : rgba(theme.color.accent.dark, 0.65)};
    }

    :hover .MuiOutlinedInput-notchedOutline {
      border-color: ${({ theme, disabled }) => (disabled ? rgba(theme.color.accent.dark, 0.65) : theme.color.primary)};
    }

    &.Mui-focused {
      .MuiOutlinedInput-notchedOutline {
        border-color: ${({ theme }) => theme.color.primary};
      }
    }

    &.Mui-error {
      .MuiOutlinedInput-notchedOutline {
        border-color: ${({ theme }) => theme.color.error.dark};
      }
    }
  }

  .MuiInputLabel-root {
    font-family: ${({ theme }) => theme.font.family.primary};
    font-size: ${({ theme }) => theme.font.size.s};
    font-weight: ${({ theme }) => theme.font.weight.medium};
    top: -4px;
    color: ${({ theme }) => theme.color.accent.dark};

    &.Mui-focused,
    &.MuiFormLabel-filled {
      font-weight: ${({ theme }) => theme.font.weight.medium};
      font-size: ${({ theme }) => theme.font.size.m};
      top: 0px;
    }

    &.Mui-focused {
      color: ${({ theme }) => theme.color.primary};

      .MuiOutlinedInput-notchedOutline {
        border-color: ${({ theme }) => theme.color.primary};
      }
    }

    &.Mui-error {
      color: ${({ theme }) => theme.color.error.dark};

      .MuiOutlinedInput-notchedOutline {
        border-color: ${({ theme }) => theme.color.error.dark};
      }
    }
  }

  .MuiFormHelperText-root {
    position: absolute;
    font-family: ${({ theme }) => theme.font.family.primary};
    font-size: ${({ theme }) => theme.font.size.xxxs};
    margin-left: 0;
    top: 95%;

    &.Mui-error {
      color: ${({ theme }) => theme.color.error.dark};
    }
  }

  legend {
    font-size: ${({ theme }) => theme.font.size.xs};
  }
`;

export default { Input };
