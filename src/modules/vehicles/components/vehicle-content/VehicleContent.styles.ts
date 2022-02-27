import styled from 'styled-components/macro';

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
  gap: 30px;

  ${({ theme }) => theme.media.md} {
    flex-direction: row;
  }
`;

const NoVehicleInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: -20px;

  h3 {
    font-size: ${({ theme }) => theme.font.size.l};
    font-weight: ${({ theme }) => theme.font.weight.medium};
  }
`;

export default { Wrapper, NoVehicleInfo };
