import { Box } from '@mui/material';

import { MovieForm, ContentHeader, CenteredContainer } from '@/components';

import styles from './styles';
import useUpdateMovie from './useUpdateMovie';

import type { IUpdateMovieProps } from './types';

const UpdateMovie = ({ movieId }: IUpdateMovieProps) => {
  const { movie } = useUpdateMovie({ movieId });

  return (
    <Box sx={styles.contentWrapper}>
      <CenteredContainer sx={styles.container}>
        <ContentHeader mainTitle={'Update movie'} />
      </CenteredContainer>
      <CenteredContainer sx={styles.container}>
        <MovieForm movie={movie} />
      </CenteredContainer>
    </Box>
  );
};

export default UpdateMovie;
