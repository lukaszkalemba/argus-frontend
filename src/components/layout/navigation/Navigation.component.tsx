import { useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import useBreakpoint from 'hooks/useBreakpoint.hook';
import { navList, DEFAULT_PAGE } from 'components/layout/navigation/nav-list/NavList.utils';
import BottomBar from 'components/layout/navigation/bottom-bar/BottomBar.component';
import NavList from 'components/layout/navigation/nav-list/NavList.component';
import { LOCAL_STORAGE_NAV_STATE } from './Navigation.types';
import S from './Navigation.styles';

const Navigation = () => {
  const { isBreakpoint } = useBreakpoint(1400);

  const { pathname } = useLocation();

  // on mobile set to false
  // on desktop get state from local storage
  const defaultNavOpenState = isBreakpoint ? false : !!Number(localStorage.getItem(LOCAL_STORAGE_NAV_STATE));

  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE);
  const [isOpen, setIsOpen] = useState(defaultNavOpenState);

  useEffect(() => {
    setIsOpen(defaultNavOpenState);
  }, [isBreakpoint]);

  // find current page's icon and title
  useEffect(() => {
    navList.find(({ navElements }) =>
      navElements.find(({ path, icon, title }) => {
        if (path === pathname) {
          setCurrentPage({ icon, title });
          return true;
        }

        setCurrentPage(DEFAULT_PAGE);
        return false;
      })
    );
  }, [pathname]);

  const toggleOpen = useCallback(() => {
    setIsOpen((is) => {
      // set state to local storage only on desktop
      if (!isBreakpoint) localStorage.setItem(LOCAL_STORAGE_NAV_STATE, !is ? '1' : '0');

      return !is;
    });
  }, [isBreakpoint]);

  return (
    <S.Wrapper>
      <NavList isOpen={isOpen} toggleOpen={toggleOpen} currentPage={currentPage} />
      <BottomBar isOpen={isOpen} toggleOpen={toggleOpen} currentPage={currentPage} />
    </S.Wrapper>
  );
};

export default Navigation;
