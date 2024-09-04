import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filter from '../Filter/Filter';
import UserTable from '../UserTable/UserTable';
import { useEffect } from 'react';
import { fetchUsers, setFilters } from '../../features/users/usersSlice';
import { RootState, AppDispatch } from '../../store';
import { selectFilteredUsers } from '../../selectors';
import styles from './UsersContainer.module.scss';

const UsersContainer = () => {
  const dispatch: AppDispatch = useDispatch();
  const users = useSelector(selectFilteredUsers);
  const filters = useSelector((state: RootState) => state.users.filters);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleFilterChange = (newFilters: typeof filters) => {
    dispatch(setFilters(newFilters));
  };

  return (
    <div className={styles.usersContainer}>
      <Filter filters={filters} onFilterChange={handleFilterChange} />
      <UserTable users={users} />
    </div>
  );
};

export default UsersContainer;
