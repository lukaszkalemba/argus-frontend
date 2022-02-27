import styled from 'styled-components/macro';

const Loader = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  :after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid ${({ theme }) => theme.color.secondary};
    border-color: ${({ theme }) => theme.color.secondary} transparent ${({ theme }) => theme.color.secondary}
      transparent;
    animation: animation 1.2s linear infinite;
  }

  @keyframes animation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default { Loader };
