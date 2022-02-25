import { useEffect } from 'react';

interface IOutsideClickProps {
  ref: React.RefObject<HTMLElement>;
  isOpen: boolean;
  toggle: () => void;
}

// Set state to false if clicked outside passed ref
// or pressed escape key
export default ({ ref, isOpen, toggle }: IOutsideClickProps): void => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && isOpen && !ref.current?.contains(event.target as HTMLElement)) {
        toggle();
      }
    };

    const handleKeyDownEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        toggle();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDownEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDownEscape);
    };
  }, [ref, isOpen, toggle]);
};
