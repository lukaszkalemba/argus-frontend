import { FormattedMessage } from 'react-intl';
import { FormLabel, RadioGroup, FormControlLabel, Radio as MuiRadio } from '@mui/material';
import { IRadioProps } from './Radio.types';
import S from './Radio.styles';

const Radio: React.FC<IRadioProps> = ({ captionId, options, defaultValue, register }) => (
  <S.Wrapper>
    <FormLabel>
      <FormattedMessage id={captionId} />
    </FormLabel>

    <RadioGroup row defaultValue={defaultValue}>
      {options.map((value) => (
        <FormControlLabel key={value} value={value} control={<MuiRadio />} label={value} {...register} />
      ))}
    </RadioGroup>
  </S.Wrapper>
);

export default Radio;
