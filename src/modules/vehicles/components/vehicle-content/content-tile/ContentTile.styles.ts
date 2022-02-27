import styled from 'styled-components/macro';
import Tile from 'components/tile/Tile.component';

const Wrapper = styled(Tile)`
  width: 100%;
  padding: 20px;

  > div > div {
    border-radius: 4px;
  }

  ${({ theme }) => theme.media.md} {
    width: 50%;
    padding: 40px;
  }
`;

const Paragraphs = styled.div`
  p {
    :first-child {
      margin-top: 0;
    }

    margin-top: 15px;
    font-size: ${({ theme }) => theme.font.size.xxs};

    ${({ theme }) => theme.media.md} {
      font-size: ${({ theme }) => theme.font.size.s};
      margin-top: 30px;
    }

    span {
      display: block;
      font-size: ${({ theme }) => theme.font.size.m};
      margin-top: 5px;
      color: ${({ theme }) => theme.color.primary};
      font-weight: ${({ theme }) => theme.font.weight.medium};

      ${({ theme }) => theme.media.md} {
        font-size: ${({ theme }) => theme.font.size.l};
      }
    }
  }
`;

export default { Wrapper, Paragraphs };
