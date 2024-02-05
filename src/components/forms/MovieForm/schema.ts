import { object, string, type SchemaOf, mixed, number } from 'yup';

import type { IMovieFormData } from './types';

const today = new Date();

export const schema: SchemaOf<IMovieFormData> = object()
  .noUnknown()
  .shape({
    id: string().trim().optional(),
    title: string().trim().max(200).required('Title is required'),
    publishYear: number()
      .typeError('Publish Year must be a number')
      .min(0, 'Publish Year must be more than 0')
      .max(today.getFullYear(), 'Publish Year is greater than current year')
      .nullable()
      .required('Publish Year is required'),
    posterImageUri: string()
      .trim()
      .when('file', {
        is: (file: any) => !file,
        then: string().trim().required('Image is required'),
        otherwise: string().trim().optional(),
      }),
    file: mixed().test('file-or-posterImageUri', 'Image is required', function (value) {
      const { posterImageUri } = this.parent;

      if (!posterImageUri || posterImageUri === '') {
        return value !== null && !!value.length;
      }

      return true;
    }),
  });
