import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from 'components/input/Input.component';
import Button from 'components/button/Button.component';
import Radio from 'components/radio/Radio.component';
import { VehicleType } from 'modules/vehicles/types/vehicles.types';
import { addVehicleSchema } from './VehicleForm.validators';
import { IVehicleForm, IVehicleFormProps } from './VehicleForm.types';
import S from './VehicleForm.styles';

const VehicleForm: React.FC<IVehicleFormProps> = ({ onSubmit, defaultValues }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IVehicleForm>({
    resolver: yupResolver(addVehicleSchema),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues,
  });

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <Radio
        captionId="addVehicle:typeLabel"
        defaultValue={defaultValues?.type || VehicleType.Hybrid}
        options={[VehicleType.Hybrid, VehicleType.SUV, VehicleType.Truck]}
        register={register('type')}
      />
      <Input type="text" captionId="addVehicle:nameLabel" error={errors.name} register={register('name')} />
      <Input type="number" captionId="addVehicle:latLabel" error={errors.lat} register={register('lat')} />
      <Input type="number" captionId="addVehicle:lngLabel" error={errors.lng} register={register('lng')} />

      <Button type="submit" captionId="addVehicle:submit" />
    </S.Form>
  );
};

export default VehicleForm;
