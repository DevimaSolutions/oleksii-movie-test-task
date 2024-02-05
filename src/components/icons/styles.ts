const styles = {
  root: {
    fill: 'none',
    width: 'auto',
    height: 'auto',
  },
  up: {
    transform: 'rotateZ(0deg)',
  },
  right: {
    transform: 'rotateZ(90deg)',
  },
  down: {
    transform: 'rotateZ(180deg)',
  },
  left: {
    transform: 'rotateZ(270deg)',
  },
} as const;
export default styles;
