export interface User {
  id: number;
  name: string;
  username: string;
  city: string;
  email: string;
  address: Address,
}

export interface Address {
  city: string,
  country: string
}

// types/Modal.ts
export interface ModalState {
  isOpen: boolean;
  userIdToDelete: number | null;
}

export interface ModalAction {
  type: string;
  payload?: any;
}

// types/Sort.ts
export enum SortDirection {
  ASC = 'asc',
  DESC = 'desc',
}

export interface SortState {
  sortBy: keyof User;
  sortDirection: SortDirection;
}

export interface SortAction {
  type: string;
  payload?: any;
}