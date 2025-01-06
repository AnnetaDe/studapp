import { forwardRef, type InputHTMLAttributes } from 'react';


interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  extraStyles?: string;
}

export const Field = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, extraStyles, ...rest }, ref) => {
    return (
      <div className={`${extraStyles}`}>
        <label className="text-gray-50/40 text-md">
          {label}
          <input ref={ref} {...rest} type="text" className='ml-2 w-full border-none bg-transparent outline-none placeholder:italic text-sm focus:outline-none'/>
        </label>
      </div>
    );
  }
);

Field.displayName = 'field';
