import type { IEmailType, IConfirmPasswordType } from '@/types';

export interface ISignUpFormData extends IEmailType, IConfirmPasswordType {
  email: string;
}
