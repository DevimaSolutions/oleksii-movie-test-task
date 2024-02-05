import { useMediaQuery } from '@mui/material';
import { useRouter } from 'next/router';
import { useCallback, useMemo, useState } from 'react';
import { toast } from 'react-toastify';

import { theme } from '@/constants';
import { useDispatch } from '@/hooks';
import { thunks as movieThunks } from '@/redux/movies';

import type { IMovieFormData, IMovieFormProps } from './types';
import type { IFormErrorResponse } from '@/data-transfer/responses';
import type { FormikHelpers } from 'formik';

const useMovieForm = ({ movie }: IMovieFormProps) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const initialValues = useMemo<IMovieFormData>(
    () => ({
      id: movie?.id ?? '',
      title: movie?.title ?? '',
      publishYear: movie?.publishYear ?? null,
      posterImageUri: movie?.posterImageUri ?? '',
      file: null,
    }),
    [movie],
  );

  const handleSubmit = useCallback(
    async (
      { id, ...values }: IMovieFormData,
      { setSubmitting, setErrors }: FormikHelpers<IMovieFormData>,
    ) => {
      try {
        if (!!id) {
          await dispatch(
            movieThunks.updateMovie({
              ...values,
              id,
            }),
          ).unwrap();
          toast.success('Movie updated successfully', { toastId: 'updated-movie' });
          router.push('/');
        } else {
          await dispatch(
            movieThunks.createMovie({
              ...values,
            }),
          ).unwrap();
          toast.success('Movie created successfully', { toastId: 'created-movie' });
          router.push('/');
        }
        setIsSubmitted(true);
      } catch (err: unknown) {
        const error = err as IFormErrorResponse<IMovieFormData>;
        setErrors(error.errors);
        setSubmitting(false);
      }
    },
    [dispatch, router],
  );

  const handleCancel = useCallback(() => {
    router.push('/');
  }, [router]);

  const handleRemoveUploadedFile = useCallback(
    (setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void) =>
      () => {
        setFieldValue('file', null);
      },
    [],
  );

  const handleRemoveExistingFile = useCallback(
    (
        values: IMovieFormData,
        setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void,
      ) =>
      () => {
        setFieldValue('posterImageUri', '');
      },
    [],
  );

  return {
    isMobile,
    isSubmitted,
    initialValues,
    handleSubmit,
    handleCancel,
    handleRemoveUploadedFile,
    handleRemoveExistingFile,
  };
};

export default useMovieForm;
