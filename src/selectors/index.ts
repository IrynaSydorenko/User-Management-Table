import { createSelector } from 'reselect';
import { RootState } from '../store';

const getUsers = (state: RootState) => state.users.users;
const getFilters = (state: RootState) => state.users.filters;

export const selectFilteredUsers = createSelector(
  [getUsers, getFilters],
  (users, filters) => {
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(filters.name.toLowerCase()) &&
        user.username.toLowerCase().includes(filters.username.toLowerCase()) &&
        user.email.toLowerCase().includes(filters.email.toLowerCase()) &&
        user.phone.toLowerCase().includes(filters.phone.toLowerCase())
    );
  }
);
