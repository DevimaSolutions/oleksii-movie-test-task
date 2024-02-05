import { Box, Typography } from '@mui/material';

import { MovieForm, CenteredContainer, ContentHeader } from '@/components';

import styles from './styles';
import useCreateMovie from './useCreateMovie';

const CreateMovie = () => {
  const { handleBack } = useCreateMovie();
  return (
    <Box>
      <CenteredContainer sx={styles.container}>
        <ContentHeader
          mainTitle={'Create movie'}
          secondaryActionComponent={
            <Typography sx={styles.backLabel} onClick={handleBack}>
              Go back
            </Typography>
          }
        />
      </CenteredContainer>
      <CenteredContainer sx={styles.container}>
        <MovieForm movie={null} />
      </CenteredContainer>
    </Box>
  );
};

export default CreateMovie;
