import { useCallback, useState } from 'react';

export default (defaultValue: boolean): [boolean, (callback?: () => void) => void] => {
  const [value, setValue] = useState(defaultValue);

  const toggleValue = useCallback((callback?: () => void) => {
    setValue((currentValue) => !currentValue);
    callback?.();
  }, []);

  return [value, toggleValue];
};
