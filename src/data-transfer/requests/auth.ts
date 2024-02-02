import type { IEmailType, IPasswordType } from '@/types';

export interface ISignInRequest {
  email: string;
  password: string;
}

export interface IForgotPasswordRequest {
  email: string;
}

export interface ISignUpRequest extends IEmailType, IPasswordType {}
