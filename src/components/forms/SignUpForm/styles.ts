import { theme } from '@/constants';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '300px',
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
