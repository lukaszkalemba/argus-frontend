import { useRef } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Search as SearchIcon } from '@mui/icons-material';
import useOutsideClickHook from 'hooks/useOutsideClick.hook';
import useToggle from 'hooks/useToggle.hook';
import HS from 'components/layout/top-bar/TopBar.styles';
import S from './Search.styles';

const Search = () => {
  const mobileSearchWrapperRef = useRef<HTMLFormElement>(null);
  const { formatMessage } = useIntl();
  const [isOpen, toggleOpen] = useToggle(false);

  useOutsideClickHook({ ref: mobileSearchWrapperRef, isOpen, toggle: toggleOpen });

  return (
    <>
      <S.SearchButtonMobileWrapper>
        <HS.IconButton type="button" onClick={() => toggleOpen()}>
          <SearchIcon />
        </HS.IconButton>
      </S.SearchButtonMobileWrapper>

      <S.SearchForm isOpen={isOpen} ref={mobileSearchWrapperRef}>
        <div>
          <label htmlFor="search">
            <SearchIcon />

            <input id="search" type="text" placeholder={formatMessage({ id: 'search:placeholder' })} />
          </label>
        </div>

        <button type="submit">
          <FormattedMessage id="search:search" />
        </button>
      </S.SearchForm>
    </>
  );
};

export default Search;
