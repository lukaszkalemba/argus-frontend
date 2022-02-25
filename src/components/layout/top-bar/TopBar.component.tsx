import Search from 'components/layout/top-bar/search/Search.component';
import Logo from 'components/layout/top-bar/logo/Logo.component';
import UserOptions from 'components/layout/top-bar/user-options/UserOptions.component';
import S from './TopBar.styles';

const TopBar = () => (
  <S.Wrapper>
    <S.LogoMobileWrapper>
      <Logo />
    </S.LogoMobileWrapper>

    <div>
      <Search />
      <UserOptions />
    </div>
  </S.Wrapper>
);

export default TopBar;
