import { formControlLabelClasses } from '@mui/material';

import { theme } from '@/constants';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    width: '100%',
    textAlign: 'center',
    marginBottom: theme.spacing(7),
  },
  fieldsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(5),
    width: '300px',
  },
  signUpHelper: {
    marginTop: theme.spacing(3),
    display: 'flex',
    gap: theme.spacing(3),
    alignItems: 'baseline',
    justifyContent: 'center',
  },
  rememberMeCheckbox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [`& .${formControlLabelClasses.root}`]: {
      gap: theme.spacing(3),
      margin: '0px',
    },
  },
  rememberMeLabel: {
    ...theme.typography.subtitle1,
    margin: '0px',
  },
  textButton: {
    height: theme.spacing(6),
    padding: '0px',
    border: 'none',
    ...theme.typography.subtitle1,
    color: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
} as const;
export default styles;
