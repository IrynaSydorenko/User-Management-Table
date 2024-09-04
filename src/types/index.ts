export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export interface UsersState {
  users: User[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  filters: Filters;
}

export interface Filters {
  name: string;
  username: string;
  email: string;
  phone: string;
}

export interface SetFilterPayload {
  name: string;
  username: string;
  email: string;
  phone: string;
}
