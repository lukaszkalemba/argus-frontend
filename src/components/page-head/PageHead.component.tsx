import { FormattedMessage } from 'react-intl';
import Button from 'components/button/Button.component';
import S from './PageHead.styles';
import { IPageHeadProps } from './PageHead.types';

const PageHead: React.FC<IPageHeadProps> = ({ captionId, button }) => (
  <S.Wrapper>
    <h2>
      <FormattedMessage id={captionId} />
    </h2>

    {button && <Button {...button} />}
  </S.Wrapper>
);

export default PageHead;
