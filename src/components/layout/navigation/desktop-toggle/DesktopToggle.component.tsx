import { ChevronRight } from '@mui/icons-material';
import S from './DesktopToggle.styles';
import { IDesktopToggleProps } from './DesktopToggle.types';

const DesktopToggle: React.FC<IDesktopToggleProps> = ({ isOpen, toggleOpen }) => (
  <S.ToggleButton isOpen={isOpen} onClick={toggleOpen}>
    <ChevronRight />
  </S.ToggleButton>
);

export default DesktopToggle;
