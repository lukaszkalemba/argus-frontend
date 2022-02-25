import { FormattedMessage } from 'react-intl';
import { Menu, CloseOutlined } from '@mui/icons-material';
import S from './BottomBar.styles';
import { IBottomBarProps } from './BottomBar.types';

const BottomBar: React.FC<IBottomBarProps> = ({ isOpen, toggleOpen, currentPage }) => (
  <S.Wrapper>
    <S.Content>
      <div>
        {!!currentPage.title.length && (
          <>
            {currentPage.icon}
            <span>
              <FormattedMessage id={currentPage.title} />
            </span>
          </>
        )}
      </div>
      <button type="button" onClick={toggleOpen}>
        {isOpen ? <CloseOutlined /> : <Menu />}
      </button>
    </S.Content>
  </S.Wrapper>
);

export default BottomBar;
