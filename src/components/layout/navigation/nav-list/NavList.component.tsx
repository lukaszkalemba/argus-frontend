import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import useBreakpoint from 'hooks/useBreakpoint.hook';
import useOutsideClick from 'hooks/useOutsideClick.hook';
import DesktopToggle from 'components/layout/navigation/desktop-toggle/DesktopToggle.component';
import Logo from 'components/layout/top-bar/logo/Logo.component';
import S from './NavList.styles';
import { navList } from './NavList.utils';
import { INavListProps } from './NavList.types';

const NavList: React.FC<INavListProps> = ({ isOpen, toggleOpen, currentPage }) => {
  const navListRef = useRef<HTMLElement>(null);

  const { isBreakpoint } = useBreakpoint(1400);

  useOutsideClick({
    ref: navListRef,
    isOpen,
    // don't set to false on desktop
    toggle: isBreakpoint ? toggleOpen : () => {},
  });

  return (
    <S.NavListWrapper ref={navListRef} isOpen={isOpen}>
      <div>
        <S.LogoDesktopWrapper>
          <Logo />
        </S.LogoDesktopWrapper>

        {navList.map(({ categoryTitle, navElements }) => (
          <S.ListGroup isOpen={isOpen} key={categoryTitle}>
            <h3>
              <FormattedMessage id={categoryTitle} />
            </h3>

            {navElements.map(({ icon, path, title }) => (
              <S.NavElement
                $isOpen={isOpen}
                $isSelected={title.includes(currentPage.title)}
                onClick={() => isBreakpoint && toggleOpen()}
                key={path}
                to={path}
                as={NavLink}
              >
                {icon}

                <span>
                  <FormattedMessage id={title} />
                </span>
              </S.NavElement>
            ))}
          </S.ListGroup>
        ))}
      </div>

      <DesktopToggle isOpen={isOpen} toggleOpen={toggleOpen} />
    </S.NavListWrapper>
  );
};

export default NavList;
