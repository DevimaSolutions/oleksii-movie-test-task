import { Box } from '@mui/material';

import { MovieForm, CenteredContainer, ContentHeader } from '@/components';

import styles from './styles';
import useCreateMovie from './useCreateMovie';

const CreateMovie = () => {
  useCreateMovie();
  return (
    <Box sx={styles.contentWrapper}>
      <CenteredContainer sx={styles.container}>
        <ContentHeader mainTitle={'Create movie'} />
      </CenteredContainer>
      <CenteredContainer sx={styles.container}>
        <MovieForm movie={null} />
      </CenteredContainer>
    </Box>
  );
};

export default CreateMovie;
