import { useCallback, useMemo } from 'react';

import { getAuthManager } from '@/utils';

import type { ISignInFormProps } from './types';
import type { IFormErrorResponse } from '@/data-transfer/responses';
import type { AxiosError } from 'axios';
import type { FormikHelpers } from 'formik';

const useSignInForm = () => {
  const initialValues: ISignInFormProps = useMemo(
    () => ({
      email: '',
      password: '',
      rememberMe: true,
    }),
    [],
  );

  const signInHandler = useCallback(
    (
      { email, password, rememberMe }: ISignInFormProps,
      { setErrors }: FormikHelpers<ISignInFormProps>,
    ) =>
      getAuthManager()
        .then((auth) => auth.signIn({ email, password, rememberMe }))
        .catch((error: AxiosError<IFormErrorResponse<ISignInFormProps>>) => {
          setErrors({
            email: ' ',
            password: error.response?.data?.message,
            ...error.response?.data?.errors,
          });
        }),
    [],
  );

  return { initialValues, onSubmit: signInHandler };
};

export default useSignInForm;
