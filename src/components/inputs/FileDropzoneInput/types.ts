import type { ISvgProps } from '@/components/icons/types';
import type { SxProps } from '@mui/material';
import type { FieldProps } from 'formik';
import type { FC } from 'react';
import type { Accept } from 'react-dropzone';

export interface IFileDropzoneInputProps<
  V = (File | string)[],
  FormValues extends Record<string, unknown> = Record<string, unknown>,
> extends FieldProps<V, FormValues> {
  sx?: SxProps;
  maxFileSize: number;
  maxFiles: number;
  multiple: boolean;
  accept?: Accept;
  dropTitle: string;
  acceptanceTitle: string;
  noClick?: boolean;
  Icon?: FC<ISvgProps>;
  placeholderLabel?: string;
  placeholderOrientation: 'horizontal' | 'vertical';
  onUpload?: (files: File[]) => void;
}

export type IUseFileDropzoneInputProps = Pick<
  IFileDropzoneInputProps,
  'field' | 'form' | 'maxFileSize' | 'maxFiles' | 'onUpload' | 'accept'
>;
