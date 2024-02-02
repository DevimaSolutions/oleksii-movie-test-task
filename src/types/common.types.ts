import type { UserRole } from '@/constants';

export interface IPasswordType {
  password: string;
}

export interface IEmailType {
  email: string;
}

export interface IConfirmPasswordType extends IPasswordType {
  confirmPassword: string;
}

export interface IUserRoleType {
  role: UserRole;
}
