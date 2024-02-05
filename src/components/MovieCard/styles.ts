import { theme } from '@/constants';

const styles = {
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    backgroundColor: theme.palette.background.paper,
    height: '334px',
    borderRadius: theme.spacing(4),
    padding: '0px',
    [theme.breakpoints.up('md')]: {
      borderRadius: theme.spacing(5),
      height: '504px',
      padding: theme.spacing(3),
      paddingBottom: theme.spacing(4),
      gap: theme.spacing(4),
    },
  },
  labelsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(3),
    paddingLeft: theme.spacing(3),
  },
  title: {
    ...theme.typography.body1,
    fontWeight: 500,
  },
  imageWrapper: {
    position: 'relative',
    boxSizing: 'border-box',
    height: '246px',
    width: '100%',
    [theme.breakpoints.up('xs')]: {
      '& > img': {
        borderRadius: '12px 12px 0px 0px',
      },
    },
    [theme.breakpoints.up('md')]: {
      height: '400px',
      borderRadius: theme.spacing(4),
      '& > img': {
        borderRadius: '12px',
      },
    },
  },
} as const;

export default styles;
