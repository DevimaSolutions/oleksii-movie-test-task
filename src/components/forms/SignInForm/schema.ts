import { boolean, object, string } from 'yup';

export const schema = object({
  email: string().trim().required(),
  password: string().trim().required(),
  rememberMe: boolean().optional(),
}).required();
