import mimeTypes from './mime-types';

import type { Accept } from 'react-dropzone';

export const posterAcceptTypes: Accept = {
  images: [mimeTypes.png, mimeTypes.jpg, mimeTypes.jpeg],
};
