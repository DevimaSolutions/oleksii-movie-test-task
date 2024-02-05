import { Box, Button, Typography } from '@mui/material';
import { Formik, Form, Field } from 'formik';

import { NextLinkButton } from '@/components';
import { PasswordInput, TextInput } from '@/components/inputs';

import { schema } from './schema';
import styles from './styles';
import useSignUpForm from './useSignUpForm';

export default function SignUpForm() {
  const { initialValues, handleSubmit } = useSignUpForm();

  return (
    <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form style={styles.root}>
          <Typography variant="h1" sx={styles.title}>
            Sign Up
          </Typography>
          <Box sx={styles.fieldsWrapper}>
            <Field
              placeholder="Email"
              type="email"
              name="email"
              autoComplete="email"
              fullWidth
              component={TextInput}
            />
            <Field
              placeholder="Password"
              name="password"
              autoComplete="current-password"
              fullWidth
              component={PasswordInput}
            />
            <Field
              placeholder="Confirm Password"
              name="confirmPassword"
              fullWidth
              component={PasswordInput}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
              disabled={isSubmitting}
            >
              Sign Up
            </Button>
          </Box>
          <Box sx={styles.signInHelper}>
            <Typography variant="subtitle1">Already have an account?</Typography>
            <NextLinkButton sx={styles.textButton} href={'/sign-in'}>
              Sign in
            </NextLinkButton>
          </Box>
        </Form>
      )}
    </Formik>
  );
}
