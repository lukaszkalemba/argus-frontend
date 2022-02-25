import { FormattedMessage } from 'react-intl';
import { Checkbox as MuiCheckbox, FormControlLabel } from '@mui/material';
import S from './Checkbox.styles';
import { ICheckboxProps } from './Checkbox.types';

const Checkbox: React.FC<ICheckboxProps> = ({ captionId, error, noSpacing = false, disabled = false, register }) => {
  const errorCaptionId = error?.message;

  return (
    <S.Wrapper error={!!errorCaptionId} disabled={disabled} $noSpacing={noSpacing}>
      <FormControlLabel
        label={<FormattedMessage id={captionId} />}
        control={
          <MuiCheckbox
            disabled={disabled}
            icon={
              <div className="icon">
                <span />
              </div>
            }
            {...register}
          />
        }
      />

      {errorCaptionId && (
        <S.Error>
          <FormattedMessage id={errorCaptionId} />
        </S.Error>
      )}
    </S.Wrapper>
  );
};

export default Checkbox;
