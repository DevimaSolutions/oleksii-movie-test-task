import { Button, Typography, Grid } from '@mui/material';
import { Formik, Form, Field } from 'formik';

import { NextLinkButton } from '@/components';
import { PasswordInput, TextInput } from '@/components/inputs';

import { schema } from './schema';
import useSignInForm from './useSignInForm';

export default function SignInForm() {
  const onSubmit = useSignInForm();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Field
                type="email"
                name="email"
                autoComplete="email"
                fullWidth
                component={TextInput}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Field
                name="password"
                autoComplete="current-password"
                fullWidth
                component={PasswordInput}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
                disabled={isSubmitting}
              >
                Sign In
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography>Dont have an account?</Typography>
              <NextLinkButton href={'/sign-up'}>Sign up</NextLinkButton>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}
