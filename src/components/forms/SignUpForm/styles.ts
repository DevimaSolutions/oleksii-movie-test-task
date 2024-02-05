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
  signInHelper: {
    marginTop: theme.spacing(3),
    display: 'flex',
    gap: theme.spacing(3),
    alignItems: 'baseline',
    justifyContent: 'center',
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
