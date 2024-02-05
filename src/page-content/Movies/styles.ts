import { theme } from '@/constants';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: 'inherit',
    height: 'inherit',
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  addButton: {
    width: '202px',
  },
  emptyWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(7),
    width: '100%',
    height: '100%',
  },
  movieListWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: 'inherit',
    height: 'inherit',
    paddingBottom: '110px',
  },
  cardsSpacing: {
    my: theme.spacing(12),
  },
  container: {
    height: 'auto',
    justifyContent: 'none',
    width: 'inherit',
  },
  cardsWrapper: {
    display: 'grid',
    width: 'inherit',
    maxWidth: '1440px',
    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
    gap: '20px',
    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: 'repeat(auto-fill, minmax(282px, 1fr))',
      gap: '24px',
    },
  },
  title: {
    width: '100%',
    textAlign: 'center',
  },
  logoutWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(4),
  },
  logoutLabel: {
    ...theme.typography.body2,
    fontWeight: 700,
  },
  iconButton: {
    padding: '0px',
    color: theme.palette.common.white,
    gap: theme.spacing(4),
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  paginationSpacing: {
    flexGrow: 1,
    height: '100%',
    flex: 1,
  },
} as const;

export default styles;
