'use client';
import SelectLevel from './SelectLevel';
import { useMutation } from '@tanstack/react-query';
import { testService } from '../../../services/test.service';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '../Button/Button';

export interface ITestRequest {
  subject: string;
  level: number;
  count: number;
}
type FormData = ITestRequest;

const FormGenerate = () => {
  const { register, handleSubmit, control } = useForm<FormData>({
    defaultValues: {
      subject: '',
      level: 0,
      count: 0,
    },
  });
  const mutationGenerate = useMutation({
    mutationKey: ['generate'],
    mutationFn: (data: FormData) => testService.generateTest(data),
    onSuccess: () => console.log('success'),
  });
  const onSubmit = (data: FormData) => {
    const { subject, level, count } = data;
    console.log(data);
    mutationGenerate.mutate({ subject, level, count });
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
            max={25}
            min={1}
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
