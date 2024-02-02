import { AuthAccessLevel } from '@/constants';
import SignUp from '@/page-content/SignUp';
import { Layout } from '@/types';
import { withPageSettings } from '@/utils';

export default function SignUpPage() {
  return <SignUp />;
}

export const getServerSideProps = withPageSettings({
  auth: { accessLevel: AuthAccessLevel.Unauthorized },
  metaData: { title: 'Sign up' },
  layout: Layout.Auth,
});
