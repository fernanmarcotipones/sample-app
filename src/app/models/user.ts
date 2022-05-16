export interface Name {
  first: string;
  middle?: string;
  last: string;
}

export interface User {
  id: string;
  name: Name;
  email: string;
  address: string;
  username: string;
  password: string;
  type: string;
  createdAt: string;
  updatedAt: string;
}

export enum UserType {
  Admin = 'ADMIN',
  Dev = 'DEV',
  Staff = 'STAFF'
}

export const USER_TYPE_SELECT = [
  { label: 'Admin', value: UserType.Admin },
  { label: 'Dev', value: UserType.Dev },
  { label: 'Staff', value: UserType.Staff },
];

export const DEFAULT_USER: User = {
  'id': '',
  'name': {
    'first': '',
    'middle': '',
    'last': ''
  },
  'email': '',
  'username': '',
  'password': '',
  'address': '',
  'type': '',
  'createdAt': '',
  'updatedAt': ''
}
