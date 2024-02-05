import { Delete } from '@mui/icons-material';
import { Box, Button, IconButton } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import Image from 'next/image';

import { FileDropzoneInput, TextInput } from '@/components/inputs';
import { posterAcceptTypes } from '@/constants';
import { formFileUrl } from '@/utils';

import { schema } from './schema';
import styles from './styles';
import useMovieForm from './useMovieForm';

import type { IMovieFormProps } from './types';

const MovieForm = ({ movie }: IMovieFormProps) => {
  const {
    isMobile,
    initialValues,
    handleSubmit,
    handleCancel,
    handleRemoveUploadedFile,
    handleRemoveExistingFile,
  } = useMovieForm({
    movie,
  });
  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form style={styles.form}>
          <Box sx={styles.root}>
            {isMobile && (
              <Box sx={styles.buttonsWrapper}>
                <Button
                  sx={styles.button}
                  variant="outlined"
                  color="primary"
                  type="button"
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
                <Button sx={styles.button} variant="contained" color="primary" type="submit">
                  {!!values?.id ? 'Update' : 'Submit'}
                </Button>
              </Box>
            )}
            <Box sx={styles.dndWrapper}>
              {!values.file?.length && !values.posterImageUri ? (
                <Box sx={styles.imageContainer}>
                  <Field
                    fullWidth
                    name="file"
                    accept={posterAcceptTypes}
                    textFieldProps={{
                      label: 'Upload CV',
                    }}
                    dropTitle="file"
                    acceptanceTitle=".png, .jpg"
                    multiple={false}
                    maxFiles={1}
                    component={FileDropzoneInput}
                  />
                </Box>
              ) : (
                <>
                  {!!values.file?.length && !values.posterImageUri && (
                    <Box sx={styles.imageContainer}>
                      <IconButton
                        disableRipple
                        disableTouchRipple
                        disableFocusRipple
                        sx={styles.deleteButton}
                        onClick={handleRemoveUploadedFile(setFieldValue)}
                      >
                        <Delete />
                      </IconButton>
                      <Image
                        src={formFileUrl(values.file[0])}
                        alt={values.file[0].name}
                        fill
                        priority
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                      />
                    </Box>
                  )}
                  {!values.file?.length && values.posterImageUri && (
                    <Box sx={styles.imageContainer}>
                      <Image
                        src={values.posterImageUri}
                        alt={'Poster Image URL'}
                        fill
                        priority
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                      />
                      <IconButton
                        disableRipple
                        disableTouchRipple
                        disableFocusRipple
                        sx={styles.deleteButton}
                        onClick={handleRemoveExistingFile(values, setFieldValue)}
                      >
                        <Delete />
                      </IconButton>
                    </Box>
                  )}
                </>
              )}
            </Box>

            <Box sx={styles.formWrapper}>
              <Box sx={styles.fieldsWrapper}>
                <Field name="title" placeholder="Title" fullWidth component={TextInput} />
                <Field
                  sx={styles.numberField}
                  name="publishYear"
                  placeholder="Publish Year"
                  fullWidth
                  component={TextInput}
                  type="number"
                  inputMode="numeric"
                />
              </Box>
              {!isMobile && (
                <Box sx={styles.buttonsWrapper}>
                  <Button
                    sx={styles.button}
                    variant="outlined"
                    color="primary"
                    type="button"
                    onClick={handleCancel}
                  >
                    Cancel
                  </Button>
                  <Button sx={styles.button} variant="contained" color="primary" type="submit">
                    {!!values?.id ? 'Update' : 'Submit'}
                  </Button>
                </Box>
              )}
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default MovieForm;
