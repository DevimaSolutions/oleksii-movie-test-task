import { useCallback, useMemo } from 'react';

import { useDispatch } from '@/hooks';
import { thunks as authThunks } from '@/redux/authorization';
import { getAuthManager } from '@/utils';

import type { ISignUpFormData } from './types';
import type { IFormErrorResponse } from '@/data-transfer/responses';
import type { AxiosError } from 'axios';
import type { FormikHelpers } from 'formik';

const useSignInForm = () => {
  const dispatch = useDispatch();

  const initialValues: ISignUpFormData = useMemo(
    () => ({
      email: '',
      password: '',
      confirmPassword: '',
    }),
    [],
  );
  const handleSubmit = useCallback(
    async (
      { confirmPassword, ...values }: ISignUpFormData,
      { setSubmitting, setErrors }: FormikHelpers<ISignUpFormData>,
    ) => {
      try {
        const { user, tokens } = await dispatch(authThunks.signUp(values)).unwrap();
        const auth = await getAuthManager();
        auth.setAuth(user, tokens);
      } catch (err: unknown) {
        const axiosError = err as AxiosError<IFormErrorResponse<ISignUpFormData>>;

        setErrors({ ...axiosError.response?.data?.errors });
        setSubmitting(false);
      }
    },
    [dispatch],
  );

  return { initialValues, handleSubmit };
};

export default useSignInForm;
