import { imageTypes } from '@/constants';
import { bytesParser } from '@/utils';

import type { Accept, FileRejection } from 'react-dropzone';

/**
 * @function - Parses react-dropzone errors into one string
 * @param fileRejections - FileRejection[]
 * @param maxSize - number
 * @param maxFiles - number
 * @param accept - Accept
 * @returns string
 */
export const parseError = (
  fileRejections: FileRejection[],
  maxSize: number,
  maxFiles: number,
  accept?: Accept,
) => {
  const parsedErrors: string[] = [];

  if (fileRejections.length > maxFiles) {
    const errorMessage = `Max files allowed: ${maxFiles}`;

    if (parsedErrors.includes(errorMessage)) {
      return;
    }

    parsedErrors.push(errorMessage);
  }

  fileRejections.forEach(({ errors }) => {
    errors.forEach((error) => {
      if (error.code === 'file-too-large') {
        const errorMessage = `File is larger than ${bytesParser(maxSize)}`;

        if (parsedErrors.includes(errorMessage)) {
          return;
        }

        parsedErrors.push(errorMessage);
      } else if (error.code === 'file-invalid-type') {
        const acceptedTypes = Object.values(accept as Accept).reduce((acc, current) => {
          acc.push(...current);
          return acc;
        });

        const errorMessage = `Allowed file extensions: ${acceptedTypes
          .map(
            (mimeType) =>
              Object.entries(imageTypes)
                .map(([key, val]) => {
                  if (mimeType === val) {
                    return key;
                  }
                })
                .find((val) => !!val?.length) ?? mimeType.split('/').pop(),
          )
          .join(', ')}`;

        if (parsedErrors.includes(errorMessage)) {
          return;
        }

        parsedErrors.push(errorMessage);
      } else {
        if (parsedErrors.includes(error.message)) {
          return;
        }

        parsedErrors.push(error.message);
      }
    });
  });

  return parsedErrors.join('. ');
};

const dropzoneErrorParser = {
  parseError,
} as const;

export default dropzoneErrorParser;
