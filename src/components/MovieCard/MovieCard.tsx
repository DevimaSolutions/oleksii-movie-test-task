import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import { combineSx } from '@/utils';

import styles from './styles';

import type { IMovieCardProps } from './types';

const MovieCard = ({ title, publishYear, posterImageUri, sx, ...props }: IMovieCardProps) => {
  return (
    <Box sx={combineSx(styles.root, sx)} {...props}>
      <Box sx={styles.imageWrapper}>
        <Image
          src={posterImageUri ?? ''}
          alt={title}
          priority
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </Box>
      <Box sx={styles.labelsWrapper}>
        <Typography sx={combineSx(styles.title, styles.overflowWrapper)}>{title}</Typography>
        <Typography sx={styles.overflowWrapper} variant="subtitle1">
          {publishYear}
        </Typography>
      </Box>
    </Box>
  );
};

export default MovieCard;
