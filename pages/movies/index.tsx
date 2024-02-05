import { AuthAccessLevel } from '@/constants';
import Movies from '@/page-content/Movies';
import { withPageSettings } from '@/utils';

const MoviesPage = () => {
  return <Movies />;
};

export const getServerSideProps = withPageSettings({
  auth: { accessLevel: AuthAccessLevel.Authorized },
  metaData: { title: 'Movies' },
});

export default MoviesPage;
