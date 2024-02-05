import { Box, Button, Typography } from '@mui/material';
import { Formik, Form, Field } from 'formik';

import { NextLinkButton } from '@/components';
import { CheckboxInput, PasswordInput, TextInput } from '@/components/inputs';

import { schema } from './schema';
import styles from './styles';
import useSignInForm from './useSignInForm';

export default function SignInForm() {
  const { initialValues, onSubmit } = useSignInForm();

  return (
    <Formik initialValues={initialValues} validationSchema={schema} onSubmit={onSubmit}>
      {({ isSubmitting }) => (
        <Form style={styles.root}>
          <Typography variant="h1" sx={styles.title}>
            Sign In
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
              name="rememberMe"
              label="Remember me"
              sx={styles.rememberMeCheckbox}
              labelProps={{ sx: styles.rememberMeLabel }}
              component={CheckboxInput}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
              disabled={isSubmitting}
            >
              Sign In
            </Button>
          </Box>
          <Box sx={styles.signUpHelper}>
            <Typography variant="subtitle1">Dont have an account?</Typography>
            <NextLinkButton sx={styles.textButton} href={'/sign-up'}>
              Sign up
            </NextLinkButton>
          </Box>
        </Form>
      )}
    </Formik>
  );
}
