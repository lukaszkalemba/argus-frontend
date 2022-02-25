import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { KeyboardArrowDown } from '@mui/icons-material';
import useToggle from 'hooks/useToggle.hook';
import useOutsideClick from 'hooks/useOutsideClick.hook';
import Avatar from 'components/avatar/Avatar.component';
import S from './UserOptions.styles';
import { userOptionsList } from './UserOptions.utils';

const UserOptions = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isOpen, toggleValue] = useToggle(false);

  useOutsideClick({ ref: wrapperRef, isOpen, toggle: toggleValue });

  return (
    <S.Wrapper ref={wrapperRef} isOpen={isOpen}>
      <button type="button" onClick={() => toggleValue()}>
        <span>Lukasz Kalemba</span>

        <div>
          <Avatar src="https://unsplash.it/30/30" size="small" />
        </div>

        <KeyboardArrowDown />
      </button>

      <S.OptionsList isOpen={isOpen}>
        {userOptionsList.map(({ icon, captionId, path, handleAction }) => (
          <S.ListItem key={captionId}>
            <Link
              to={path || '/'}
              onClick={() => {
                toggleValue();
                handleAction?.();
              }}
            >
              {icon}
              <span>
                <FormattedMessage id={captionId} />
              </span>
            </Link>
          </S.ListItem>
        ))}
      </S.OptionsList>
    </S.Wrapper>
  );
};

export default UserOptions;
