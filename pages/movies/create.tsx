import { AuthAccessLevel } from '@/constants';
import CreateMovie from '@/page-content/CreateMovie';
import { withPageSettings } from '@/utils';

const CreateMoviePage = () => {
  return <CreateMovie />;
};

export const getServerSideProps = withPageSettings({
  auth: { accessLevel: AuthAccessLevel.Authorized },
  metaData: { title: 'Create movie' },
});

export default CreateMoviePage;
