import { FormattedMessage } from 'react-intl';
import S from './PageHead.styles';

const PageHead: React.FC = ({ children }) => (
  <S.Wrapper>
    <h2>
      <FormattedMessage id="nav:vehicles" />
    </h2>

    {children}
  </S.Wrapper>
);
export default PageHead;
