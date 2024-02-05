import { theme } from '@/constants';

const styles = {
  root: {
    display: 'flex',
    gap: '128px',
    marginTop: theme.spacing(12),
    flexDirection: 'row',
    width: '100%',
    height: '100%',
  },
  form: {
    width: '100%',
    height: '100%',
  },
  dndWrapper: {
    width: '473px',
    height: '504px',
  },
  formWrapper: {},
  fieldsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(5),
    width: '100%',
    [theme.breakpoints.up('lg')]: {
      width: '362px',
      '& > div:last-of-type': {
        width: '216px',
      },
    },
  },
  buttonsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: theme.spacing(10),
    gap: theme.spacing(4),
  },
  imageContainer: {
    flexShrink: 0,
    position: 'relative',
    width: '100%',
    height: '100%',
    '& > img': {
      borderRadius: '10px',
    },
  },
  button: {
    width: '167px',
  },
  numberField: {
    '& input[type=number]': {
      '-moz-appearance': 'textfield',
    },
    '& input[type=number]::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
    '& input[type=number]::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
  },
} as const;

export default styles;
