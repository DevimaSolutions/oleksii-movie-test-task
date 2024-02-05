import mimeTypes from './mime-types';

import type { Accept } from 'react-dropzone';

export const posterAcceptTypes: Accept = {
  docs: [mimeTypes.png, mimeTypes.jpg, mimeTypes.jpeg],
};
