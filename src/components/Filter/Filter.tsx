import React, { ChangeEvent } from 'react';
import InputField from '../InputField/InputField';
import { SetFilterPayload } from '../../types';
import styles from './Filter.module.scss';

export interface FilterComponentProps {
  filters: SetFilterPayload;
  onFilterChange: (filters: SetFilterPayload) => void;
}

const FilterComponent: React.FC<FilterComponentProps> = ({
  filters,
  onFilterChange,
}) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onFilterChange({
      ...filters,
      [name]: value,
    });
  };

  return (
    <div className={styles.filterContainer}>
      <InputField
        name='name'
        placeholder='Filter by name'
        value={filters.name}
        onChange={handleInputChange}
      />
      <InputField
        name='username'
        placeholder='Filter by username'
        value={filters.username}
        onChange={handleInputChange}
      />
      <InputField
        name='email'
        placeholder='Filter by email'
        value={filters.email}
        onChange={handleInputChange}
      />
      <InputField
        name='phone'
        placeholder='Filter by phone'
        value={filters.phone}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default FilterComponent;
