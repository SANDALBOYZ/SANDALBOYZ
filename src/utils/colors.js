export const SANDALBOYZ_NATURAL = '#F1EDE5';
export const SANDALBOYZ_YELLOW = '#F1D000';
export const SANDALBOYZ_BLACK = '#231F20';
export const SANDALBOYZ_ROSE = '#F2AF94';
export const SANDALBOYZ_OLIVE = '#9EB297';

const colors = {
  // theme
  SANDALBOYZ_NATURAL,
  SANDALBOYZ_YELLOW,
  SANDALBOYZ_BLACK,
  SANDALBOYZ_ROSE,
  SANDALBOYZ_OLIVE,

  // neutrals
  N900: '#000000',
  N800: '#111111',
  N700: '#262626',
  N600: '#666666',
  N500: '#9A9DA6',
  N400: '#D1D4DE',
  N200: '#E2E4EB',
  N100: '#F2F4FA',
  N0: '#FFF',

  // palette
  CAUTION: '#FEC25A',
  NEGATIVE: '#F22E2E',
  POSITIVE: '#49DCBB',
  PRIMARY: '#866BFE',
  SECONDARY: '#538FFF',
};

const SANDALBOYZ_COLORS = [
  SANDALBOYZ_NATURAL,
  SANDALBOYZ_YELLOW,
  SANDALBOYZ_BLACK,
  SANDALBOYZ_ROSE,
  SANDALBOYZ_OLIVE,
];

export const randomSandalboyzColor = () =>
  SANDALBOYZ_COLORS[Math.floor(Math.random() * 5)];

export default colors;
