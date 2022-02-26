import { FormattedMessage } from 'react-intl';
import { Add } from '@mui/icons-material';
import Button from 'components/button/Button.component';
import S from './PageHead.styles';

const PageHead: React.FC = () => {
  const openModal = () => {};

  return (
    <S.Wrapper>
      <h2>
        <FormattedMessage id="nav:vehicles" />
      </h2>

      <Button captionId="vehicles:add" icon={<Add />} onClick={openModal} />
    </S.Wrapper>
  );
};

export default PageHead;
