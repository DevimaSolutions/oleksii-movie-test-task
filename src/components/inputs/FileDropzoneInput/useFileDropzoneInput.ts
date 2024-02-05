import { useCallback, useState } from 'react';

import { dropzoneErrorParser } from '@/utils';

import type { IUseFileDropzoneInputProps } from './types';
import type { FileRejection } from 'react-dropzone';

const useFileDropzoneInput = ({
  accept,
  maxFileSize,
  maxFiles,
  field,
  form,
  onUpload,
}: IUseFileDropzoneInputProps) => {
  const [error, setError] = useState<string | null | undefined>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[], fileRejections: FileRejection[]) => {
      setError(null);

      if (fileRejections.length) {
        setError(dropzoneErrorParser.parseError(fileRejections, maxFileSize, maxFiles, accept));
      }

      if (onUpload) {
        onUpload(acceptedFiles);
      }

      if (maxFiles === 1) {
        form.setFieldValue(field.name, acceptedFiles);
        form.setTouched({ ...form.touched, [field.name]: true });
        return;
      }

      form.setFieldValue(field.name, [...field.value, ...acceptedFiles]);
      form.setTouched({ ...form.touched, [field.name]: true });
    },
    [onUpload, maxFiles, form, field.name, field.value, maxFileSize, accept],
  );

  return {
    error,
    onDrop,
  };
};

export default useFileDropzoneInput;
