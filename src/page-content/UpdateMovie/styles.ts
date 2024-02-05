import { theme } from '@/constants';

const styles = {
  root: {},
  container: {
    height: 'auto',
    justifyContent: 'none',
    alignItems: 'center',
  },
  backLabel: {
    ...theme.typography.body2,
    px: theme.spacing(3),
    fontWeight: 700,
    '&:hover': {
      cursor: 'pointer',
    },
  },
} as const;

export default styles;
