import { confirmPasswordSchema, emailSchema } from '@/validation-schemas';

import type { ISignUpFormData } from './types';
import type { SchemaOf } from 'yup';

export const schema: SchemaOf<ISignUpFormData> = emailSchema.concat(confirmPasswordSchema);
