import { Box, Button, Typography, Pagination, PaginationItem, IconButton } from '@mui/material';
import { useMemo } from 'react';

import { CenteredContainer, NextLinkButton, ContentHeader, MovieCard } from '@/components';
import { ExitIcon, PlusIcon } from '@/components/icons';
import { combineSx } from '@/utils';

import styles from './styles';
import useMovies from './useMovies';

const Movies = () => {
  const {
    isLoading,
    movies,
    pagesAmount,
    page,
    handleChangePage,
    handleAddMovie,
    handleLogout,
    handleMovieRedirect,
  } = useMovies();

  const content = useMemo(() => {
    if (isLoading && !movies.length) {
      // TODO return <div>loading...</div>;
      return null;
    }
    if (!movies.length) {
      return (
        <CenteredContainer>
          <Box sx={styles.emptyWrapper}>
            <Typography variant="h1" sx={styles.title}>
              Your movie list is empty
            </Typography>
            <NextLinkButton sx={styles.addButton} variant="contained" href={'/movies/create'}>
              Add a new movie
            </NextLinkButton>
          </Box>
        </CenteredContainer>
      );
    }
    return (
      <Box sx={styles.movieListWrapper}>
        <CenteredContainer sx={styles.container}>
          <ContentHeader
            mainTitle={'My movies'}
            mainActionComponent={
              <IconButton
                disableFocusRipple
                disableRipple
                disableTouchRipple
                sx={styles.iconButton}
                onClick={handleAddMovie}
              >
                <PlusIcon />
              </IconButton>
            }
            secondaryActionComponent={
              <>
                <Button
                  disableFocusRipple
                  disableRipple
                  disableTouchRipple
                  sx={styles.iconButton}
                  onClick={handleLogout}
                >
                  <Typography sx={styles.logoutLabel}>Logout</Typography>

                  <ExitIcon />
                </Button>
              </>
            }
          />
        </CenteredContainer>
        <CenteredContainer sx={combineSx(styles.container, styles.cardsSpacing)}>
          <Box sx={styles.cardsWrapper}>
            {movies.map(({ id, ...movie }) => (
              <MovieCard key={id} onClick={handleMovieRedirect(id)} {...movie} />
            ))}
            {/* TODO {isLoading && <div>loading2...</div>} */}
          </Box>
        </CenteredContainer>
        <CenteredContainer sx={combineSx(styles.container, styles.paginationSpacing)}>
          <Pagination
            shape="rounded"
            sx={styles.pagination}
            count={pagesAmount}
            page={page}
            onChange={handleChangePage}
            renderItem={(item) => (
              <PaginationItem
                slots={{
                  previous: () => <Typography variant="h6">Prev</Typography>,
                  next: () => <Typography variant="h6">Next</Typography>,
                }}
                {...item}
              />
            )}
          />
        </CenteredContainer>
      </Box>
    );
  }, [
    isLoading,
    movies,
    handleAddMovie,
    handleLogout,
    pagesAmount,
    page,
    handleChangePage,
    handleMovieRedirect,
  ]);

  return <Box sx={styles.root}>{content}</Box>;
};

export default Movies;
