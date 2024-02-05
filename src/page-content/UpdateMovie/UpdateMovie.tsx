import { Box, Typography } from '@mui/material';

import { MovieForm, ContentHeader, CenteredContainer } from '@/components';

import styles from './styles';
import useUpdateMovie from './useUpdateMovie';

import type { IUpdateMovieProps } from './types';

const UpdateMovie = ({ movieId }: IUpdateMovieProps) => {
  const { movie, handleBack } = useUpdateMovie({ movieId });

  return (
    <Box>
      <CenteredContainer sx={styles.container}>
        <ContentHeader
          mainTitle={'Update movie'}
          secondaryActionComponent={
            <Typography sx={styles.backLabel} onClick={handleBack}>
              Go back
            </Typography>
          }
        />
      </CenteredContainer>
      <CenteredContainer sx={styles.container}>
        <MovieForm movie={movie} />
      </CenteredContainer>
    </Box>
  );
};

export default UpdateMovie;
