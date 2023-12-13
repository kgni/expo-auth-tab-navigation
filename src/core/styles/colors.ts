export const COLORS = {
  primary20: '#D0F0FF',
  primary40: '#A1E2FF',
  primary60: '#73D3FF',
  primary80: '#44C5FF',
  primary100: '#15B6FF',

  secondary20: '#DDE9E0',
  secondary40: '#BAD3C1',
  secondary60: '#98BDA3',
  secondary80: '#75A784',
  secondary100: '#539165',

  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',

  // Grays
  gray20: '#D2D5DA',
  gray40: '#A5ABB5',
  gray60: '#79828F',
  gray80: '#4C586A',

  // success

  success20: '#D8F3D8',
  success40: '#B1E6B1',
  success60: '#8ADA89',
  success80: '#63CD62',
  success100: '#3CC13B',

  // warning

  warning20: '#FDF1D2',
  warning40: '#FAE4A4',
  warning60: '#F8D677',
  warning80: '#F5C949',
  warning100: '#F3BB1C',

  // danger

  danger20: '#FCD7D7',
  danger40: '#F9AFAF',
  danger60: '#F68788',
  danger80: '#F35F60',
  danger100: '#F03738',

  inputBackground: '#F7F7F7',
} as const;

export type COLORS = typeof COLORS;
