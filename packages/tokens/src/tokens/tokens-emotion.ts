const primitiveColor = {
  neutral: {
    '0': '#080A0E',
    '100': '#101216',
    '200': '#181A1E',
    '300': '#282A2E',
    '400': '#383A3E',
    '500': '#505256',
    '600': '#64666A',
    '700': '#787A7E',
    '800': '#A0A2A6',
    '900': '#B4B6BA',
    '1000': '#DADCE0',
    '1100': '#FAFCFF',
  },
  black: {
    '700A': 'rgba(0,0,0,0.8)',
    '600A': 'rgba(0,0,0,0.6)',
    '500A': 'rgba(0,0,0,0.4)',
    '400A': 'rgba(0,0,0,0.32)',
    '300A': 'rgba(0,0,0,0.2)',
    '200A': 'rgba(0,0,0,0.12)',
    '100A': 'rgba(0,0,0,0.08)',
  },
  white: {
    '700A': 'rgba(255,255,255,0.8)',
    '600A': 'rgba(255,255,255,0.6)',
    '500A': 'rgba(255,255,255,0.4)',
    '400A': 'rgba(255,255,255,0.32)',
    '300A': 'rgba(255,255,255,0.2)',
    '200A': 'rgba(255,255,255,0.12)',
    '100A': 'rgba(255,255,255,0.08)',
  },
  red: {
    '100': '#ffeceb',
    '200': '#ffd5d2',
    '300': '#fd9891',
    '400': '#f87168',
    '500': '#f15b50',
    '600': '#e2483d',
    '700': '#c9372c',
    '800': '#87241c',
    '900': '#5d1f1a',
    '1000': '#42221f',
  },
  yellow: {
    '100': '#fff5eb',
    '200': '#ffe9d2',
    '300': '#fdc991',
    '400': '#f8b268',
    '500': '#f1a350',
    '600': '#e2923d',
    '700': '#c97d2c',
    '800': '#87531c',
    '900': '#5d3d1a',
    '1000': '#42311f',
  },
  blue: {
    '100': '#ebf2ff',
    '200': '#d2e1ff',
    '300': '#91b5fd',
    '400': '#6898f8',
    '500': '#5086f1',
    '600': '#3d74e2',
    '700': '#2c60c9',
    '800': '#1c4087',
    '900': '#1a305d',
    '1000': '#1f2b42',
  },
  green: {
    '100': '#ebfff5',
    '200': '#9cfccc',
    '300': '#47EB99',
    '400': '#26d980',
    '500': '#14b866',
    '600': '#10934c',
    '700': '#147042',
    '800': '#125433',
    '900': '#104129',
    '1000': '#0b2819',
  },
  purple: {
    '100': '#f3ebff',
    '200': '#e9ddfd',
    '300': '#cbacfb',
    '400': '#ac7cf8',
    '500': '#8d4bf6',
    '600': '#6d19f5',
    '700': '#570ad1',
    '800': '#4308a0',
    '900': '#2f0670',
    '1000': '#1a033f',
  },
  ohre: {
    '100': '#FFF8F1',
    '200': '#FFE6C8',
    '300': '#FFD3A0',
    '400': '#FFC077',
    '500': '#E2A763',
    '600': '#C58F50',
    '700': '#A8773F',
    '800': '#8A6030',
    '900': '#6D4B22',
    '1000': '#503617',
  },
  cyan: {
    '100': '#ecffff',
    '200': '#c1feff',
    '300': '#96feff',
    '400': '#6bfdff',
    '500': '#3df1f3',
    '600': '#2acfd1',
    '700': '#1aadaf',
    '800': '#0e8c8d',
    '900': '#056a6b',
    '1000': '#004849',
  },
}
const semanticColor = {
  content: {
    neutral: {
      bold: `${primitiveColor.neutral['1100']}`,
      default: `${primitiveColor.neutral['1000']}`,
      subtle: `${primitiveColor.neutral['900']}`,
      subtlest: `${primitiveColor.neutral['700']}`,
      disabled: `${primitiveColor.neutral['600']}`,
      default_inverse: `${primitiveColor.neutral['0']}`,
    },
    neuroidPrimary: {
      default: `${primitiveColor.purple['400']}`,
      default_inverse: `${primitiveColor.purple['800']}`,
    },
    danger: {
      default: `${primitiveColor.red['400']}`,
    },
    warning: {
      default: `${primitiveColor.yellow['400']}`,
    },
    success: {
      default: `${primitiveColor.green['400']}`,
    },
    informative: {
      default: `${primitiveColor.blue['400']}`,
    },
    zoltarinaPrimary: {
      default: `${primitiveColor.ohre['400']}`,
      defult_inverse: `${primitiveColor.ohre['900']}`,
    },
    heydPrimary: {
      default: `${primitiveColor.cyan['400']}`,
      defult_inverse: `${primitiveColor.cyan['1000']}`,
    },
  },
  background: {
    neutral: {
      default: `${primitiveColor.neutral['200']}`,
      selected: `${primitiveColor.neutral['300']}`,
      disabled: `${primitiveColor.neutral['400']}`,
    },
    neuroidPrimary: {
      default: `${primitiveColor.purple['600']}`,
      selected: `${primitiveColor.purple['700']}`,
      disabled: `${primitiveColor.neutral['400']}`,
    },
    neuroidSecondary: {
      default: `${primitiveColor.purple['300']}`,
      selected: `${primitiveColor.purple['400']}`,
      disabled: `${primitiveColor.neutral['400']}`,
    },
    danger: {
      default: `${primitiveColor.red['700']}`,
      selected: `${primitiveColor.red['800']}`,
      disabled: `${primitiveColor.neutral['400']}`,
    },
    warning: {
      default: `${primitiveColor.yellow['700']}`,
      selected: `${primitiveColor.yellow['800']}`,
      disabled: `${primitiveColor.neutral['400']}`,
    },
    success: {
      default: `${primitiveColor.green['700']}`,
      selected: `${primitiveColor.green['800']}`,
      disabled: `${primitiveColor.neutral['400']}`,
    },
    informative: {
      default: `${primitiveColor.blue['700']}`,
      selected: `${primitiveColor.blue['800']}`,
      disabled: `${primitiveColor.neutral['400']}`,
    },
    zoltarinaPrimary: {
      default: `${primitiveColor.ohre['400']}`,
      selected: `${primitiveColor.ohre['500']}`,
      disabled: `${primitiveColor.neutral['400']}`,
    },
    zoltarinaSecondary: {
      default: `${primitiveColor.ohre['200']}`,
      selected: `${primitiveColor.ohre['300']}`,
      disabled: `${primitiveColor.neutral['400']}`,
    },
    heydPrimary: {
      default: `${primitiveColor.cyan['500']}`,
      selected: `${primitiveColor.cyan['600']}`,
      disabled: `${primitiveColor.neutral['400']}`,
    },
    heydSecondary: {
      default: `${primitiveColor.cyan['200']}`,
      selected: `${primitiveColor.cyan['300']}`,
      disabled: `${primitiveColor.neutral['400']}`,
    },
  },
  surface: {
    base: `${primitiveColor.neutral['0']}`,
    layer_1: `${primitiveColor.neutral['100']}`,
    layer_2: `${primitiveColor.neutral['200']}`,
  },
  shadow: {
    overlay: `${primitiveColor.black['400A']}`,
    raised: `${primitiveColor.black['600A']}`,
  },
  scrim: {
    default: `${primitiveColor.black['600A']}`,
  },
  skeleton: {
    default: `${primitiveColor.neutral['100']}`,
    subtle: `${primitiveColor.neutral['200']}`,
  },
  border: {
    neutral: {
      default: `${primitiveColor.neutral['400']}`,
      subtle: `${primitiveColor.neutral['300']}`,
      disabled: `${primitiveColor.neutral['200']}`,
    },
    neuroidPrimary: {
      default: `${primitiveColor.purple['400']}`,
    },
    danger: {
      default: `${primitiveColor.red['400']}`,
    },
    warning: {
      default: `${primitiveColor.yellow['400']}`,
    },
    success: {
      default: `${primitiveColor.green['400']}`,
    },
    informative: {
      default: `${primitiveColor.blue['400']}`,
    },
    zoltarinaPrimary: {
      default: `${primitiveColor.ohre['400']}`,
    },
    heydPrimary: {
      default: `${primitiveColor.cyan['400']}`,
    },
  },
}
const shadow = {
  raised: `0px 1px 3px 0px ${semanticColor.shadow.raised}`,
  overlay: `0px 20px 25px -5px ${semanticColor.shadow.overlay}`,
}
const borderWidth = {
  none: '0px',
  sm: '1px',
  md: '2px',
  lg: '4px',
}
const spacing = {
  '0': '0rem',
  '1': '0.25rem',
  '2': '0.5rem',
  '3': '0.75rem',
  '4': '1rem',
  '6': '1.5rem',
  '8': '2rem',
  '12': '3rem',
  '20': '5rem',
  '30': '7.5rem',
  '56': '14rem',
  '72': '18rem',
  '98': '24rem',
  '128': '32rem',
  '160': '40rem',
}
const radii = {
  none: '0px',
  xs: '2px',
  sm: '4px',
  md: '8px',
  lg: '16px',
  full: '9999px',
}
const fontSize = {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.25rem',
  xl: '1.5rem',
  '2xl': '2rem',
  '3xl': '2.5rem',
  '4xl': '3rem',
}
const letterSpacing = {
  xs: '-1.5px',
  sm: '-1.2px',
  md: '-1px',
  lg: '-0.8px',
  xl: '-0.6px',
  '2xl': '-0.4px',
  '3xl': '-0.2px',
}
const lineHeight = {
  md: '1rem',
  lg: '1.25rem',
  xl: '1.5rem',
  '2xl': '1.75rem',
  '3xl': '2.25rem',
  '4xl': '2.75rem',
  '5xl': '3rem',
}
const fontWeight = {
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  regularItalic: 'Italic',
  mediumItalic: 'Medium Italic',
}
const fontFamily = {
  inter: 'Inter',
  notoSans: 'Noto Sans',
}
const typography = {
  body: {
    md: `font-family: ${fontFamily.notoSans}; font-weight: ${fontWeight.regular}; font-size: ${fontSize.sm}; line-height: ${lineHeight.lg}; letter-spacing: ${letterSpacing['3xl']};`,
    lg: `font-family: ${fontFamily.notoSans}; font-weight: ${fontWeight.regular}; font-size: ${fontSize.md}; line-height: ${lineHeight.xl}; letter-spacing: ${letterSpacing['3xl']};`,
    sm: `font-size: ${fontSize.xs}; font-weight: ${fontWeight.regular}; font-family: ${fontFamily.notoSans}; line-height: ${lineHeight.md}; letter-spacing: ${letterSpacing['3xl']};`,
  },
  label: {
    sm: `font-family: ${fontFamily.notoSans}; font-weight: ${fontWeight.medium}; font-size: ${fontSize.xs}; line-height: ${lineHeight.md}; letter-spacing: ${letterSpacing['3xl']};`,
    md: `font-family: ${fontFamily.notoSans}; font-weight: ${fontWeight.medium}; font-size: ${fontSize.sm}; line-height: ${lineHeight.lg}; letter-spacing: ${letterSpacing['3xl']};`,
  },
  title: {
    sm: `font-family: ${fontFamily.notoSans}; font-weight: ${fontWeight.medium}; font-size: ${fontSize.sm}; line-height: ${lineHeight.lg}; letter-spacing: ${letterSpacing['2xl']};`,
    md: `font-family: ${fontFamily.notoSans}; font-weight: ${fontWeight.medium}; font-size: ${fontSize.md}; line-height: ${lineHeight.xl}; letter-spacing: ${letterSpacing.xl};`,
    lg: `font-family: ${fontFamily.notoSans}; font-weight: ${fontWeight.semibold}; font-size: ${fontSize.lg}; line-height: ${lineHeight['2xl']}; letter-spacing: ${letterSpacing.xl};`,
  },
  headline: {
    sm: `font-family: ${fontFamily.inter}; font-weight: ${fontWeight.semibold}; font-size: ${fontSize.xl}; line-height: ${lineHeight['2xl']}; letter-spacing: ${letterSpacing.lg};`,
    md: `font-family: ${fontFamily.inter}; font-weight: ${fontWeight.bold}; font-size: ${fontSize['2xl']}; line-height: ${lineHeight['3xl']}; letter-spacing: ${letterSpacing.md};`,
  },
  display: {
    md: `font-family: ${fontFamily.inter}; font-weight: ${fontWeight.bold}; font-size: ${fontSize['3xl']}; line-height: ${lineHeight['4xl']}; letter-spacing: ${letterSpacing.sm};`,
    lg: `font-family: ${fontFamily.inter}; font-weight: ${fontWeight.bold}; font-size: ${fontSize['4xl']}; line-height: ${lineHeight['5xl']}; letter-spacing: ${letterSpacing.xs};`,
  },
}
const textDecoration = {
  underline: 'underline',
  none: 'none',
  lineThrough: 'line-through',
}
export const tokens = {
  primitiveColor,
  semanticColor,
  shadow,
  borderWidth,
  spacing,
  radii,
  fontSize,
  letterSpacing,
  lineHeight,
  fontWeight,
  fontFamily,
  typography,
  textDecoration,
} as const
