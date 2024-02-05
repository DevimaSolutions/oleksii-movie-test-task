import { boolean, object } from 'yup';

import { emailSchema, passwordSchema } from '@/validation-schemas';

export const schema = object({
  rememberMe: boolean().optional(),
})
  .concat(emailSchema)
  .concat(passwordSchema);
