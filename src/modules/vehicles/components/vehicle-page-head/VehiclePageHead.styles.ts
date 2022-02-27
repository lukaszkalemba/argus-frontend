import styled from 'styled-components/macro';

const ButtonsWrapper = styled.div`
  display: flex;

  button {
    flex-grow: 1;
    margin: 0 5px;

    :first-child {
      margin-left: 0;
    }

    :last-child {
      margin-right: 0;
    }

    ${({ theme }) => theme.media.md} {
      flex-grow: 0;
    }
  }
`;

export default { ButtonsWrapper };
