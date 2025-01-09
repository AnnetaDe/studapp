import { forwardRef, type InputHTMLAttributes } from 'react';


interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  extraStyles?: string;
  type?: string;
}

export const Field = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, extraStyles, type, ...rest }, ref) => {
    return (
      <div className={`${extraStyles}`}>
        <label className="text-gray-50/40 text-md">
          {label}
          <input ref={ref} type={type} {...rest} className='ml-2 w-full border-none bg-transparent outline-none placeholder:italic text-sm focus:outline-none'/>
        </label>
      </div>
    );
  }
);

Field.displayName = 'field';
