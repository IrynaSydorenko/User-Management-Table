import React, { useState } from 'react';
import { User } from '../../types';
import styles from './UserTable.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSort,
  faSortUp,
  faSortDown,
} from '@fortawesome/free-solid-svg-icons';

interface UserTableProps {
  users: User[];
}

interface SortConfig {
  key: keyof User;
  direction: 'ascending' | 'descending' | null;
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {
  const [sortConfig, setSortConfig] = useState<SortConfig | null>(null);

  const sortedUsers = React.useMemo(() => {
    if (!sortConfig) return [...users];
    let sortableUsers = [...users];
    sortableUsers.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
    return sortableUsers;
  }, [users, sortConfig]);

  const requestSort = (key: keyof User) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key: keyof User) => {
    if (!sortConfig || sortConfig.key !== key)
      return <FontAwesomeIcon icon={faSort} />;
    if (sortConfig.direction === 'ascending')
      return <FontAwesomeIcon icon={faSortUp} />;
    return <FontAwesomeIcon icon={faSortDown} />;
  };

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th onClick={() => requestSort('name')}>
            Name {getSortIcon('name')}
          </th>
          <th onClick={() => requestSort('username')}>
            Username {getSortIcon('username')}
          </th>
          <th onClick={() => requestSort('email')}>
            Email {getSortIcon('email')}
          </th>
          <th onClick={() => requestSort('phone')}>
            Phone {getSortIcon('phone')}
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
