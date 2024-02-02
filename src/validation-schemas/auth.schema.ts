import { object, ref, string } from 'yup';

import { passwordHelperText, PASSWORD_REGEX, textConstants } from '@/constants';

import type { IConfirmPasswordType, IEmailType, IPasswordType } from '@/types';
import type { SchemaOf } from 'yup';

export const passwordSchema: SchemaOf<IPasswordType> = object()
  .noUnknown()
  .shape({
    password: string()
      .trim()
      .min(textConstants.minPasswordSize)
      .max(textConstants.maxPasswordSize)
      .matches(PASSWORD_REGEX, passwordHelperText)
      .required(),
  });

export const emailSchema: SchemaOf<IEmailType> = object()
  .noUnknown()
  .shape({
    email: string()
      .trim()
      .email('Make sure that email address is correct.')
      .max(textConstants.maxStringSize)
      .required(),
  });

export const confirmPasswordSchema: SchemaOf<IConfirmPasswordType> = passwordSchema.shape({
  confirmPassword: string()
    .oneOf([ref('password'), null], 'Passwords does not match')
    .required(),
});
