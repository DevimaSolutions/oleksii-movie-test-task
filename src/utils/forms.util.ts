import { dotObject } from './form-data-helper.util';

import type { FormikErrors, FormikTouched } from 'formik';
import type { ReactNode } from 'react';

/**
 * @function - Checks if there is field errors and field is touched
 * @param fieldName - string
 * @param touched - FormikTouched<FormValues>
 * @param errors - FormikErrors<FormValues>
 * @returns boolean
 */
export function hasFieldError<FormValues extends Record<string, unknown> = Record<string, unknown>>(
  fieldName: string,
  touched: FormikTouched<FormValues>,
  errors: FormikErrors<FormValues>,
) {
  return Boolean(dotObject(fieldName, touched) && dotObject(fieldName, errors));
}

/**
 * @function - Handles helperText condition
 * @param isError - boolean
 * @param errorText - string
 * @param helperText - string
 * @param defaultText - string
 * @returns string
 */
export const hasHelperText = (
  isError: boolean,
  errorText: string,
  helperText: ReactNode,
  defaultText = ' ',
) => {
  if (isError) return errorText;

  return helperText || defaultText;
};
