'use client';
import React from 'react';
import Select from 'react-select';

interface SelectLevelProps {
  props: any | null;
  onChange: (value: number) => void;
  newValue: number;
  id: string;
}
interface IOption {
  value: 1 | 2 | 3 | 4;
  label: string;
}

const SelectLevel: React.FC<SelectLevelProps> = props => {
  const selectableOptions: IOption[] = [
    { value: 1, label: 'Easy' },
    { value: 2, label: 'Medium' },
    { value: 3, label: 'Intermediate' },
    { value: 4, label: 'Difficult' },
  ];

  return (
    <div>
      <Select
        id={props.id}
        styles={{
          control: (base, state) => ({
            ...base,
            border: '1px solid #e2e8f0',
            boxShadow: state.isFocused ? '0 0 0 1px' : 'none',
            '&:hover': {
              border: '1px solid #17a2b8',
            },
          }),

          placeholder: base => ({
            ...base,

            color: '#a0aec0',
          }),

          option: (base, state) => ({
            ...base,
            '&:hover': {
              backgroundColor: '#17a2b8',
            },
            '&:active': {
              backgroundColor: '#17a2b8',
            },
            backgroundColor: state.isSelected ? '#17a2b8' : 'white',
            color: state.isSelected ? 'white' : 'gray',
          }),
        }}
        options={selectableOptions}
        onChange={newValue => {
          if (newValue) {
            props.onChange((newValue as unknown as IOption).value);
          }
        }}
      />
    </div>
  );
};

export default SelectLevel;
