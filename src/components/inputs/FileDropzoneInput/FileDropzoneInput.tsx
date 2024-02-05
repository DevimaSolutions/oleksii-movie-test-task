import { Box, Typography, FormControl, FormHelperText } from '@mui/material';
import { useDropzone } from 'react-dropzone';

import { UploadIcon } from '@/components/icons';
import { filesConstants } from '@/constants';
import { combineSx, hasFieldError, hasHelperText } from '@/utils';

import styles from './styles';
import useFileDropzoneInput from './useFileDropzoneInput';

import type { IFileDropzoneInputProps } from './types';

const FileDropzoneInput = ({
  sx,
  accept,
  acceptanceTitle,
  dropTitle,
  maxFileSize = filesConstants.maxFileSize,
  maxFiles = filesConstants.maxFiles,
  multiple = true,
  noClick = true,
  field,
  form,
  ...props
}: IFileDropzoneInputProps) => {
  const { error, onDrop } = useFileDropzoneInput({
    accept,
    maxFileSize,
    maxFiles,
    field,
    form,
  });

  const { getRootProps, getInputProps, isDragAccept, isDragReject, open } = useDropzone({
    onDrop,
    multiple,
    accept,
    maxSize: maxFileSize,
    maxFiles,
    noClick,
  });
  const helperText = hasHelperText(
    error ? Boolean(error) : hasFieldError(field.name, form.touched, form.errors),
    error ?? (form.errors?.[field.name] as string),
    null,
  );
  return (
    <FormControl
      {...props}
      sx={styles.formRoot}
      error={error ? Boolean(error) : hasFieldError(field.name, form.touched, form.errors)}
    >
      <Box
        sx={combineSx(styles.root(isDragAccept, isDragReject), sx)}
        {...getRootProps()}
        onClick={open}
      >
        <input {...getInputProps()} />
        <Box sx={styles.placeholderWrapper}>
          <UploadIcon />
          <Typography variant="subtitle1" sx={styles.placeholderLabel}>
            Drop and image here
          </Typography>
        </Box>
      </Box>
      {!!helperText.toString().trim().length && (
        <FormHelperText sx={styles.error}>{helperText}</FormHelperText>
      )}
    </FormControl>
  );
};

export default FileDropzoneInput;
