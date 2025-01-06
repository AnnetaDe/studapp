'use client';
import SelectLevel from './SelectLevel';
import { useMutation } from '@tanstack/react-query';
import { testService } from '../../../services/test.service';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '../Button/Button';

interface FormData {
  subject: string;
  level: number;
  count: number;
}
interface Props {
  generate: (data: FormData) => void;
}

const FormGenerate = ({ generate }: Props) => {
  const { register, handleSubmit, control } = useForm<FormData>({
    defaultValues: {
      subject: '',
      level: 0,
      count: 0,
    },
  });

  const onSubmit = (data: FormData) => {
    generate(data);
  };

  return (
    <div className="p-2 bg-white rounded-lg space-y-4 max-w-sm mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        className="grid grid-cols-4 gap-1 "
      >
        <div className="col-span-3">
          <input
            type="text"
            className="w-full border border-gray-200 rounded-sm p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Subject"
            {...register('subject')}
          />
        </div>
        <div className="col-span-1 row-span-2">
          <Button
            type="submit"
            extraStyles={
              'w-full h-full rounded-lg bg-blue-500 transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400'
            }
          >
            Generate
          </Button>
        </div>

        <div className="col-span-2">
          <Controller
            name="level"
            control={control}
            render={({ field: { onChange, value } }) => (
              <SelectLevel id="level" newValue={value || 0} onChange={onChange} props={{}} />
            )}
          />
        </div>
        <div className="col-span-1">
          <input
            type="number"
            {...register('count', {
              required: 'Count is required',
              min: { value: 1, message: 'Minimum value is 1' },
              max: { value: 25, message: 'Maximum value is 25' },
            })}
            className=" border w-full border-gray-200 rounded-sm p-1 focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Count"
            {...register('count')}
          />
        </div>
      </form>
    </div>
  );
};

export default FormGenerate;
