import React, { ChangeEvent } from 'react';
import styles from './InputField.module.scss';

interface InputFieldProps {
  name: string;
  placeholder?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      type='text'
      className={styles.inputField}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputField;
