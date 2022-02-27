import S from './PageHead.styles';
import { IPageHeadProps } from './PageHead.types';

const PageHead: React.FC<IPageHeadProps> = ({ caption, children }) => (
  <S.Wrapper>
    <h2>{caption}</h2>

    {children}
  </S.Wrapper>
);
export default PageHead;
