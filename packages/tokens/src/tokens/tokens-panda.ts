const semantic = {
  colors: {
    content: {
      neutral: {
        bold: {
          value: {
            base: '{colors.neutral.0}',
            _dark: '{colors.neutral.1100}',
          },
        },
        default: {
          value: {
            base: '{colors.neutral.300}',
            _dark: '{colors.neutral.1000}',
          },
        },
        subtle: {
          value: {
            base: '{colors.neutral.600}',
            _dark: '{colors.neutral.900}',
          },
        },
        subtlest: {
          value: {
            base: '{colors.neutral.900}',
            _dark: '{colors.neutral.500}',
          },
        },
        disabled: {
          value: {
            base: '{colors.neutral.800}',
            _dark: '{colors.neutral.600}',
          },
        },
        default_inverse: {
          value: {
            base: '{colors.neutral.1100}',
            _dark: '{colors.neutral.0}',
          },
        },
      },
      neuroidPrimary: {
        default: {
          value: {
            base: '{colors.purple.500}',
            _dark: '{colors.purple.400}',
          },
        },
        default_inverse: {
          value: {
            base: '{colors.purple.800}',
            _dark: '{colors.purple.800}',
          },
        },
      },
      danger: {
        default: {
          value: {
            base: '{colors.red.600}',
            _dark: '{colors.red.400}',
          },
        },
      },
      warning: {
        default: {
          value: {
            base: '{colors.orange.600}',
            _dark: '{colors.orange.400}',
          },
        },
      },
      success: {
        default: {
          value: {
            base: '{colors.green.600}',
            _dark: '{colors.green.400}',
          },
        },
      },
      informative: {
        default: {
          value: {
            base: '{colors.blue.600}',
            _dark: '{colors.blue.400}',
          },
        },
      },
      zoltarinaPrimary: {
        default: {
          value: {
            base: '{colors.ohre.800}',
            _dark: '{colors.ohre.400}',
          },
        },
        default_inverse: {
          value: {
            base: '{colors.ohre.1000}',
            _dark: '{colors.ohre.1000}',
          },
        },
      },
      heydPrimary: {
        default: {
          value: {
            base: '{colors.cyan.800}',
            _dark: '{colors.cyan.400}',
          },
        },
        default_inverse: {
          value: {
            base: '{colors.cyan.1000}',
            _dark: '{colors.cyan.1000}',
          },
        },
      },
      static: {
        white: {
          bold: {
            value: {
              base: '{colors.neutral.1200}',
              _dark: '{colors.neutral.1200}',
            },
          },
          default: {
            value: {
              base: '{colors.neutral.1050}',
              _dark: '{colors.neutral.1050}',
            },
          },
          subtle: {
            value: {
              base: '{colors.neutral.1000}',
              _dark: '{colors.neutral.1000}',
            },
          },
          subtlest: {
            value: {
              base: '{colors.neutral.900}',
              _dark: '{colors.neutral.900}',
            },
          },
          disabled: {
            value: {
              base: '{colors.neutral.800}',
              _dark: '{colors.neutral.800}',
            },
          },
        },
        black: {
          bold: {
            value: {
              base: '{colors.neutral.0}',
              _dark: '{colors.neutral.0}',
            },
          },
          default: {
            value: {
              base: '{colors.neutral.200}',
              _dark: '{colors.neutral.200}',
            },
          },
          subtle: {
            value: {
              base: '{colors.neutral.400}',
              _dark: '{colors.neutral.400}',
            },
          },
          subtlest: {
            value: {
              base: '{colors.neutral.600}',
              _dark: '{colors.neutral.600}',
            },
          },
          disabled: {
            value: {
              base: '{colors.neutral.800}',
              _dark: '{colors.neutral.800}',
            },
          },
        },
      },
      heybeePrimary: {
        default: {
          value: {
            base: '{colors.yellow.800}',
            _dark: '{colors.yellow.500}',
          },
        },
        default_inverse: {
          value: {
            base: '{colors.yellow.1000}',
            _dark: '{colors.yellow.1000}',
          },
        },
      },
      neutralInverse: {
        bold: {
          value: {
            base: '{colors.neutral.1100}',
            _dark: '{colors.neutral.0}',
          },
        },
        default: {
          value: {
            base: '{colors.neutral.1000}',
            _dark: '{colors.neutral.300}',
          },
        },
        subtle: {
          value: {
            base: '{colors.neutral.900}',
            _dark: '{colors.neutral.600}',
          },
        },
        subtlest: {
          value: {
            base: '{colors.neutral.500}',
            _dark: '{colors.neutral.900}',
          },
        },
        disabled: {
          value: {
            base: '{colors.neutral.600}',
            _dark: '{colors.neutral.800}',
          },
        },
        default_inverse: {
          value: {
            base: '{colors.neutral.0}',
            _dark: '{colors.neutral.1100}',
          },
        },
      },
    },
    background: {
      neutral: {
        default: {
          value: {
            base: '{colors.neutral.1050}',
            _dark: '{colors.neutral.200}',
          },
        },
        selected: {
          value: {
            base: '{colors.neutral.1000}',
            _dark: '{colors.neutral.300}',
          },
        },
        disabled: {
          value: {
            base: '{colors.neutral.1000}',
            _dark: '{colors.neutral.400}',
          },
        },
      },
      neuroidPrimary: {
        default: {
          value: {
            base: '{colors.purple.300}',
            _dark: '{colors.purple.600}',
          },
        },
        selected: {
          value: {
            base: '{colors.purple.400}',
            _dark: '{colors.purple.700}',
          },
        },
      },
      neuroidSecondary: {
        default: {
          value: {
            base: '{colors.purple.200}',
            _dark: '{colors.purple.300}',
          },
        },
        selected: {
          value: {
            base: '{colors.purple.300}',
            _dark: '{colors.purple.400}',
          },
        },
      },
      danger: {
        default: {
          value: {
            base: '{colors.red.300}',
            _dark: '{colors.red.700}',
          },
        },
        selected: {
          value: {
            base: '{colors.red.400}',
            _dark: '{colors.red.800}',
          },
        },
      },
      warning: {
        default: {
          value: {
            base: '{colors.orange.300}',
            _dark: '{colors.orange.700}',
          },
        },
        selected: {
          value: {
            base: '{colors.orange.400}',
            _dark: '{colors.orange.800}',
          },
        },
      },
      success: {
        default: {
          value: {
            base: '{colors.green.300}',
            _dark: '{colors.green.700}',
          },
        },
        selected: {
          value: {
            base: '{colors.green.400}',
            _dark: '{colors.green.800}',
          },
        },
      },
      informative: {
        default: {
          value: {
            base: '{colors.blue.300}',
            _dark: '{colors.blue.700}',
          },
        },
        selected: {
          value: {
            base: '{colors.blue.400}',
            _dark: '{colors.blue.800}',
          },
        },
      },
      zoltarinaPrimary: {
        default: {
          value: {
            base: '{colors.ohre.400}',
            _dark: '{colors.ohre.400}',
          },
        },
        selected: {
          value: {
            base: '{colors.ohre.500}',
            _dark: '{colors.ohre.500}',
          },
        },
      },
      zoltarinaSecondary: {
        default: {
          value: {
            base: '{colors.ohre.200}',
            _dark: '{colors.ohre.200}',
          },
        },
        selected: {
          value: {
            base: '{colors.ohre.300}',
            _dark: '{colors.ohre.300}',
          },
        },
      },
      heydPrimary: {
        default: {
          value: {
            base: '{colors.cyan.500}',
            _dark: '{colors.cyan.500}',
          },
        },
        selected: {
          value: {
            base: '{colors.cyan.600}',
            _dark: '{colors.cyan.600}',
          },
        },
      },
      heydSecondary: {
        default: {
          value: {
            base: '{colors.cyan.200}',
            _dark: '{colors.cyan.200}',
          },
        },
        selected: {
          value: {
            base: '{colors.cyan.300}',
            _dark: '{colors.cyan.300}',
          },
        },
      },
      static: {
        whiteAlpha: {
          bold: {
            value: {
              base: '{colors.white.700A}',
              _dark: '{colors.white.700A}',
            },
          },
          default: {
            value: {
              base: '{colors.white.500A}',
              _dark: '{colors.white.500A}',
            },
          },
          selected: {
            value: {
              base: '{colors.white.600A}',
              _dark: '{colors.white.600A}',
            },
          },
          disabled: {
            value: {
              base: '{colors.white.500A}',
              _dark: '{colors.white.500A}',
            },
          },
        },
        blackAlpha: {
          bold: {
            value: {
              base: '{colors.black.700A}',
              _dark: '{colors.black.700A}',
            },
          },
          default: {
            value: {
              base: '{colors.black.500A}',
              _dark: '{colors.black.500A}',
            },
          },
          selected: {
            value: {
              base: '{colors.black.600A}',
              _dark: '{colors.black.600A}',
            },
          },
          disabled: {
            value: {
              base: '{colors.black.500A}',
              _dark: '{colors.black.500A}',
            },
          },
        },
      },
      heybeePrimary: {
        default: {
          value: {
            base: '{colors.yellow.500}',
            _dark: '{colors.yellow.500}',
          },
        },
        selected: {
          value: {
            base: '{colors.yellow.600}',
            _dark: '{colors.yellow.600}',
          },
        },
      },
      neutralInverse: {
        default: {
          value: {
            base: '{colors.neutral.200}',
            _dark: '{colors.neutral.1050}',
          },
        },
        selected: {
          value: {
            base: '{colors.neutral.300}',
            _dark: '{colors.neutral.1000}',
          },
        },
        disabled: {
          value: {
            base: '{colors.neutral.400}',
            _dark: '{colors.neutral.1000}',
          },
        },
      },
    },
    surface: {
      base: {
        value: {
          base: '{colors.neutral.1100}',
          _dark: '{colors.neutral.0}',
        },
      },
      layer_1: {
        value: {
          base: '{colors.neutral.1100}',
          _dark: '{colors.neutral.100}',
        },
      },
      layer_2: {
        value: {
          base: '{colors.neutral.1050}',
          _dark: '{colors.neutral.200}',
        },
      },
    },
    shadow: {
      overlay: {
        value: {
          base: '{colors.black.100A}',
          _dark: '{colors.black.400A}',
        },
      },
      raised: {
        value: {
          base: '{colors.black.400A}',
          _dark: '{colors.black.600A}',
        },
      },
    },
    scrim: {
      default: {
        value: {
          base: '{colors.black.600A}',
          _dark: '{colors.black.600A}',
        },
      },
    },
    skeleton: {
      default: {
        value: {
          base: '{colors.neutral.800}',
          _dark: '{colors.neutral.100}',
        },
      },
      subtle: {
        value: {
          base: '{colors.neutral.700}',
          _dark: '{colors.neutral.200}',
        },
      },
    },
    border: {
      neutral: {
        default: {
          value: {
            base: '{colors.neutral.700}',
            _dark: '{colors.neutral.400}',
          },
        },
        subtle: {
          value: {
            base: '{colors.neutral.900}',
            _dark: '{colors.neutral.300}',
          },
        },
        disabled: {
          value: {
            base: '{colors.neutral.1000}',
            _dark: '{colors.neutral.200}',
          },
        },
      },
      neuroidPrimary: {
        default: {
          value: {
            base: '{colors.purple.500}',
            _dark: '{colors.purple.400}',
          },
        },
      },
      danger: {
        default: {
          value: {
            base: '{colors.red.500}',
            _dark: '{colors.red.400}',
          },
        },
      },
      warning: {
        default: {
          value: {
            base: '{colors.orange.500}',
            _dark: '{colors.orange.400}',
          },
        },
      },
      success: {
        default: {
          value: {
            base: '{colors.green.500}',
            _dark: '{colors.green.400}',
          },
        },
      },
      informative: {
        default: {
          value: {
            base: '{colors.blue.500}',
            _dark: '{colors.blue.400}',
          },
        },
      },
      zoltarinaPrimary: {
        default: {
          value: {
            base: '{colors.ohre.800}',
            _dark: '{colors.ohre.400}',
          },
        },
      },
      heydPrimary: {
        default: {
          value: {
            base: '{colors.cyan.800}',
            _dark: '{colors.cyan.400}',
          },
        },
      },
      heybeePrimary: {
        default: {
          value: {
            base: '{colors.yellow.800}',
            _dark: '{colors.yellow.500}',
          },
        },
      },
    },
  },
  shadows: {
    raised: {
      value: '0px 1px 3px 0px {colors.shadow.raised}',
    },
    overlay: {
      value: '0px 20px 25px -5px {colors.shadow.overlay}',
    },
  },
}
const primitive = {
  colors: {
    neutral: {
      '0': {
        value: '#080A0E',
      },
      '100': {
        value: '#101216',
      },
      '200': {
        value: '#181A1E',
      },
      '300': {
        value: '#282A2E',
      },
      '400': {
        value: '#383A3E',
      },
      '500': {
        value: '#505256',
      },
      '600': {
        value: '#64666A',
      },
      '700': {
        value: '#787A7E',
      },
      '800': {
        value: '#A0A2A6',
      },
      '900': {
        value: '#B4B6BA',
      },
      '1000': {
        value: '#DADCE0',
      },
      '1050': {
        value: '#EDEEF1',
      },
      '1100': {
        value: '#F2F4F8',
      },
      '1200': {
        value: '#F8F9FF',
      },
    },
    black: {
      '700A': {
        value: 'rgba(0,0,0,0.8)',
      },
      '600A': {
        value: 'rgba(0,0,0,0.6)',
      },
      '500A': {
        value: 'rgba(0,0,0,0.4)',
      },
      '400A': {
        value: 'rgba(0,0,0,0.32)',
      },
      '300A': {
        value: 'rgba(0,0,0,0.2)',
      },
      '200A': {
        value: 'rgba(0,0,0,0.12)',
      },
      '100A': {
        value: 'rgba(0,0,0,0.08)',
      },
    },
    white: {
      '700A': {
        value: 'rgba(255,255,255,0.8)',
      },
      '600A': {
        value: 'rgba(255,255,255,0.6)',
      },
      '500A': {
        value: 'rgba(255,255,255,0.4)',
      },
      '400A': {
        value: 'rgba(255,255,255,0.32)',
      },
      '300A': {
        value: 'rgba(255,255,255,0.2)',
      },
      '200A': {
        value: 'rgba(255,255,255,0.12)',
      },
      '100A': {
        value: 'rgba(255,255,255,0.08)',
      },
    },
    red: {
      '100': {
        value: '#ffeceb',
      },
      '200': {
        value: '#ffd5d2',
      },
      '300': {
        value: '#fd9891',
      },
      '400': {
        value: '#f87168',
      },
      '500': {
        value: '#f15b50',
      },
      '600': {
        value: '#e2483d',
      },
      '700': {
        value: '#c9372c',
      },
      '800': {
        value: '#87241c',
      },
      '900': {
        value: '#5d1f1a',
      },
      '1000': {
        value: '#42221f',
      },
    },
    orange: {
      '100': {
        value: '#fff5eb',
      },
      '200': {
        value: '#ffe9d2',
      },
      '300': {
        value: '#fdc991',
      },
      '400': {
        value: '#f8b268',
      },
      '500': {
        value: '#f1a350',
      },
      '600': {
        value: '#e2923d',
      },
      '700': {
        value: '#c97d2c',
      },
      '800': {
        value: '#87531c',
      },
      '900': {
        value: '#5d3d1a',
      },
      '1000': {
        value: '#42311f',
      },
    },
    blue: {
      '100': {
        value: '#ebf2ff',
      },
      '200': {
        value: '#d2e1ff',
      },
      '300': {
        value: '#91b5fd',
      },
      '400': {
        value: '#6898f8',
      },
      '500': {
        value: '#5086f1',
      },
      '600': {
        value: '#3d74e2',
      },
      '700': {
        value: '#2c60c9',
      },
      '800': {
        value: '#1c4087',
      },
      '900': {
        value: '#1a305d',
      },
      '1000': {
        value: '#1f2b42',
      },
    },
    green: {
      '100': {
        value: '#ebfff5',
      },
      '200': {
        value: '#9cfccc',
      },
      '300': {
        value: '#47EB99',
      },
      '400': {
        value: '#26d980',
      },
      '500': {
        value: '#14b866',
      },
      '600': {
        value: '#10934c',
      },
      '700': {
        value: '#147042',
      },
      '800': {
        value: '#125433',
      },
      '900': {
        value: '#104129',
      },
      '1000': {
        value: '#0b2819',
      },
    },
    purple: {
      '100': {
        value: '#f3ebff',
      },
      '200': {
        value: '#e9ddfd',
      },
      '300': {
        value: '#cbacfb',
      },
      '400': {
        value: '#ac7cf8',
      },
      '500': {
        value: '#8d4bf6',
      },
      '600': {
        value: '#6d19f5',
      },
      '700': {
        value: '#570ad1',
      },
      '800': {
        value: '#4308a0',
      },
      '900': {
        value: '#2f0670',
      },
      '1000': {
        value: '#1a033f',
      },
    },
    ohre: {
      '100': {
        value: '#FFF8F1',
      },
      '200': {
        value: '#FFE6C8',
      },
      '300': {
        value: '#FFD3A0',
      },
      '400': {
        value: '#FFC077',
      },
      '500': {
        value: '#E2A763',
      },
      '600': {
        value: '#C58F50',
      },
      '700': {
        value: '#A8773F',
      },
      '800': {
        value: '#8A6030',
      },
      '900': {
        value: '#6D4B22',
      },
      '1000': {
        value: '#503617',
      },
    },
    cyan: {
      '100': {
        value: '#ecffff',
      },
      '200': {
        value: '#c1feff',
      },
      '300': {
        value: '#96feff',
      },
      '400': {
        value: '#6bfdff',
      },
      '500': {
        value: '#3df1f3',
      },
      '600': {
        value: '#2acfd1',
      },
      '700': {
        value: '#1aadaf',
      },
      '800': {
        value: '#0e8c8d',
      },
      '900': {
        value: '#056a6b',
      },
      '1000': {
        value: '#004849',
      },
    },
    yellow: {
      '100': {
        value: '#FFFBED',
      },
      '200': {
        value: '#FFF3C5',
      },
      '300': {
        value: '#FFEB9D',
      },
      '400': {
        value: '#FFE375',
      },
      '500': {
        value: '#FFDB4D',
      },
      '600': {
        value: '#DDBC38',
      },
      '700': {
        value: '#BB9D27',
      },
      '800': {
        value: '#997F19',
      },
      '900': {
        value: '#77620E',
      },
      '1000': {
        value: '#554506',
      },
    },
  },
  borderWidths: {
    none: {
      value: '0px',
    },
    sm: {
      value: '1px',
    },
    md: {
      value: '2px',
    },
    lg: {
      value: '4px',
    },
  },
  spacing: {
    '0': {
      value: '0rem',
    },
    '1': {
      value: '0.25rem',
    },
    '2': {
      value: '0.5rem',
    },
    '3': {
      value: '0.75rem',
    },
    '4': {
      value: '1rem',
    },
    '6': {
      value: '1.5rem',
    },
    '8': {
      value: '2rem',
    },
    '12': {
      value: '3rem',
    },
    '20': {
      value: '5rem',
    },
    '30': {
      value: '7.5rem',
    },
    '56': {
      value: '14rem',
    },
    '72': {
      value: '18rem',
    },
    '98': {
      value: '24rem',
    },
    '128': {
      value: '32rem',
    },
    '160': {
      value: '40rem',
    },
  },
  radii: {
    none: {
      value: '0px',
    },
    xs: {
      value: '2px',
    },
    sm: {
      value: '4px',
    },
    md: {
      value: '8px',
    },
    lg: {
      value: '16px',
    },
    full: {
      value: '9999px',
    },
  },
  fontSizes: {
    xs: {
      value: '0.75rem',
    },
    sm: {
      value: '0.875rem',
    },
    md: {
      value: '1rem',
    },
    lg: {
      value: '1.25rem',
    },
    xl: {
      value: '1.5rem',
    },
    '2xl': {
      value: '2rem',
    },
    '3xl': {
      value: '2.5rem',
    },
    '4xl': {
      value: '3rem',
    },
  },
  letterSpacings: {
    xs: {
      value: '-1.5px',
    },
    sm: {
      value: '-1.2px',
    },
    md: {
      value: '-1px',
    },
    lg: {
      value: '-0.8px',
    },
    xl: {
      value: '-0.6px',
    },
    '2xl': {
      value: '-0.4px',
    },
    '3xl': {
      value: '-0.2px',
    },
  },
  lineHeights: {
    md: {
      value: '1rem',
    },
    lg: {
      value: '1.25rem',
    },
    xl: {
      value: '1.5rem',
    },
    '2xl': {
      value: '1.75rem',
    },
    '3xl': {
      value: '2.25rem',
    },
    '4xl': {
      value: '2.75rem',
    },
    '5xl': {
      value: '3rem',
    },
  },
  fontWeights: {
    regular: {
      value: '400',
    },
    medium: {
      value: '500',
    },
    semibold: {
      value: '600',
    },
    bold: {
      value: '700',
    },
    regularItalic: {
      value: 'Italic',
    },
    mediumItalic: {
      value: 'Medium Italic',
    },
  },
  fonts: {
    inter: {
      value: 'Inter',
    },
    notoSans: {
      value: 'Noto Sans',
    },
  },
}
const textStyles = {
  body: {
    md: {
      value: {
        fontFamily: 'notoSans',
        fontWeight: 'regular',
        fontSize: 'sm',
        lineHeight: 'lg',
        letterSpacing: '3xl',
      },
    },
    lg: {
      value: {
        fontFamily: 'notoSans',
        fontWeight: 'regular',
        fontSize: 'md',
        lineHeight: 'xl',
        letterSpacing: '3xl',
      },
    },
    sm: {
      value: {
        fontSize: 'xs',
        fontWeight: 'regular',
        fontFamily: 'notoSans',
        lineHeight: 'md',
        letterSpacing: '3xl',
      },
    },
  },
  label: {
    sm: {
      value: {
        fontFamily: 'notoSans',
        fontWeight: 'medium',
        fontSize: 'xs',
        lineHeight: 'md',
        letterSpacing: '3xl',
      },
    },
    md: {
      value: {
        fontFamily: 'notoSans',
        fontWeight: 'medium',
        fontSize: 'sm',
        lineHeight: 'lg',
        letterSpacing: '3xl',
      },
    },
  },
  title: {
    sm: {
      value: {
        fontFamily: 'notoSans',
        fontWeight: 'medium',
        fontSize: 'sm',
        lineHeight: 'lg',
        letterSpacing: '2xl',
      },
    },
    md: {
      value: {
        fontFamily: 'notoSans',
        fontWeight: 'medium',
        fontSize: 'md',
        lineHeight: 'xl',
        letterSpacing: 'xl',
      },
    },
    lg: {
      value: {
        fontFamily: 'notoSans',
        fontWeight: 'semibold',
        fontSize: 'lg',
        lineHeight: '2xl',
        letterSpacing: 'xl',
      },
    },
  },
  headline: {
    sm: {
      value: {
        fontFamily: 'inter',
        fontWeight: 'semibold',
        fontSize: 'xl',
        lineHeight: '2xl',
        letterSpacing: 'lg',
      },
    },
    md: {
      value: {
        fontFamily: 'inter',
        fontWeight: 'bold',
        fontSize: '2xl',
        lineHeight: '3xl',
        letterSpacing: 'md',
      },
    },
  },
  display: {
    md: {
      value: {
        fontFamily: 'inter',
        fontWeight: 'bold',
        fontSize: '3xl',
        lineHeight: '4xl',
        letterSpacing: 'sm',
      },
    },
    lg: {
      value: {
        fontFamily: 'inter',
        fontWeight: 'bold',
        fontSize: '4xl',
        lineHeight: '5xl',
        letterSpacing: 'xs',
      },
    },
  },
}
export const tokens = { semantic, primitive, textStyles } as const
