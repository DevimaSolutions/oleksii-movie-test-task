import { Button, Typography, Grid } from '@mui/material';
import { Formik, Form, Field } from 'formik';

import { NextLinkButton } from '@/components';
import { PasswordInput, TextInput } from '@/components/inputs';

import { schema } from './schema';
import useSignUpForm from './useSignUpForm';

export default function SignUpForm() {
  const { initialValues, handleSubmit } = useSignUpForm();

  return (
    <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Field
                type="email"
                name="email"
                autoComplete="email"
                fullWidth
                component={TextInput}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="password"
                autoComplete="current-password"
                fullWidth
                component={PasswordInput}
              />
            </Grid>
            <Grid item xs={12}>
              <Field name="confirmPassword" fullWidth component={PasswordInput} />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
                disabled={isSubmitting}
              >
                Sign Up
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography>Already have an account?</Typography>
              <NextLinkButton href={'/sign-in'}>Sign in</NextLinkButton>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}
