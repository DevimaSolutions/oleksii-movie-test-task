import { AuthAccessLevel } from '@/constants';
import UpdateMovie from '@/page-content/UpdateMovie';
import { withPageSettings } from '@/utils';

import type { IUpdateMovieProps } from '@/page-content/UpdateMovie/types';

const UpdateMoviePage = (props: IUpdateMovieProps) => {
  return <UpdateMovie {...props} />;
};

export const getServerSideProps = withPageSettings(
  {
    auth: { accessLevel: AuthAccessLevel.Authorized },
    metaData: { title: 'Update movie' },
  },
  async (context) => {
    const movieId = (context.query.movieId as string) ?? null;

    if (!movieId) {
      return { notFound: true };
    }

    return { props: { movieId: movieId } };
  },
);

export default UpdateMoviePage;
