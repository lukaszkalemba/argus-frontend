import styled from 'styled-components/macro';

const Wrapper = styled.div`
  margin: 0 0 22px 5px !important;

  .MuiFormLabel-root {
    color: ${({ theme }) => theme.color.accent.dark};
    font-size: ${({ theme }) => theme.font.size.xs};
    font-weight: ${({ theme }) => theme.font.weight.medium};
    font-family: ${({ theme }) => theme.font.family.primary};

    &.Mui-focused {
      color: ${({ theme }) => theme.color.primary};
    }
  }

  .MuiTypography-root {
    font-size: ${({ theme }) => theme.font.size.s};
    font-family: ${({ theme }) => theme.font.family.primary};
    color: ${({ theme }) => theme.color.accent.dark};
  }

  .Mui-checked {
    color: ${({ theme }) => theme.color.primary} !important;
  }
`;

export default { Wrapper };
