import { AuthAccessLevel } from '@/constants';
import { withPageSettings } from '@/utils';

const Home = () => {
  return (
    <>
      <h1>Homepage</h1>
    </>
  );
};

export const getServerSideProps = withPageSettings({
  auth: { accessLevel: AuthAccessLevel.Authorized },
  metaData: { title: 'Home page' },
});

export default Home;
