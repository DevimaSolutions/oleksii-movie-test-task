import { theme } from '@/constants';

const styles = {
  root: {
    width: 'inherit',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  mainWrapper: {
    display: 'flex',
    gap: theme.spacing(4),
    alignItems: 'center',
  },
} as const;

export default styles;
