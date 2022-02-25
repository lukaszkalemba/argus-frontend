import styled from 'styled-components/macro';

// Override react-toastify default styles
const Wrapper = styled.div`
  .Toastify__toast-container {
    position: fixed;
    top: unset;
    bottom: 60px;
    padding: 0 16px;
  }

  @media (min-width: 481px) {
    .Toastify__toast-container {
      top: 72px;
      bottom: unset;
      padding: 0;
    }
  }

  .Toastify__toast {
    width: 100%;
    min-height: 68px;
    margin-bottom: 12px;
    border-radius: 4px;
    padding: 10px 12px 12px;
    font-family: ${({ theme }) => theme.font.family.primary};
    font-weight: ${({ theme }) => theme.font.weight.medium};
    font-size: ${({ theme }) => theme.font.size.xs};
    line-height: 145%;
    box-shadow: ${({ theme }) => theme.shadow.right};
  }

  .Toastify__toast-body {
    div {
      margin-right: 20px;
    }

    .Toastify__toast-icon {
      margin-right: 12px;
      margin-top: 0;
    }
  }

  .Toastify__toast button {
    align-self: center !important;
    margin-left: 8px !important;
    opacity: 1 !important;
    display: flex !important;
  }

  .Toastify__toast svg {
    transform: scale(1.75) !important;
  }

  .Toastify__progress-bar {
    height: 3px;
  }

  .toast-info {
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.accent.light};

    .Toastify__progress-bar {
      background: ${({ theme }) => theme.color.accent.light};
    }

    button {
      color: ${({ theme }) => theme.color.accent.light};
    }
  }

  .toast-success {
    background-color: ${({ theme }) => theme.color.success.dark};
    color: ${({ theme }) => theme.color.success.light};

    .Toastify__progress-bar {
      background: ${({ theme }) => theme.color.success.light};
    }

    button {
      color: ${({ theme }) => theme.color.success.light};
    }
  }

  .toast-warning {
    background-color: ${({ theme }) => theme.color.warning.dark};
    color: ${({ theme }) => theme.color.warning.light};

    .Toastify__progress-bar {
      background: ${({ theme }) => theme.color.warning.light};
    }

    button {
      color: ${({ theme }) => theme.color.warning.light};
    }
  }

  .toast-error {
    background-color: ${({ theme }) => theme.color.error.dark};
    color: ${({ theme }) => theme.color.error.light};

    .Toastify__progress-bar {
      background: ${({ theme }) => theme.color.error.light};
    }

    button {
      color: ${({ theme }) => theme.color.error.light};
    }
  }
`;

export default { Wrapper };
