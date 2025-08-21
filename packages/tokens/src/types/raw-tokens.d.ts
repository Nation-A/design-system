// This file is auto-generated from tokens.json

interface RawTokens {
  colors: Colors;
  fontFamily: FontFamily;
  typography: Typography;
  fontWeight: FontWeight;
  textDecoration: TextDecoration;
  fontSize: FontSize;
  lineHeight: LineHeight;
  letterSpacing: LetterSpacing;
  radii: Radii;
  borderWidth: BorderWidth;
  spacing: Spacing;
  shadow: Shadow2;
}

interface Shadow2 {
  raised: Raised;
  overlay: Raised;
}

interface Raised {
  value: Value2;
}

interface Value2 {
  x: string;
  y: string;
  blur: string;
  spread: string;
  color: string;
  type: string;
}

interface Spacing {
  '0': _0;
  '1': _0;
  '2': _0;
  '3': _0;
  '4': _0;
  '6': _0;
  '8': _0;
  '12': _0;
  '20': _0;
  '30': _0;
  '56': _0;
  '72': _0;
  '98': _0;
  '128': _0;
  '160': _0;
}

interface BorderWidth {
  none: _0;
  sm: _0;
  md: _0;
  lg: _0;
}

interface Radii {
  none: _0;
  xs: _0;
  sm: _0;
  md: _0;
  lg: _0;
  full: _0;
}

interface LetterSpacing {
  xs: _0;
  sm: _0;
  md: _0;
  lg: _0;
  xl: _0;
  '2xl': _0;
  '3xl': _0;
}

interface LineHeight {
  md: _0;
  lg: _0;
  xl: _0;
  '2xl': _0;
  '3xl': _0;
  '4xl': _0;
  '5xl': _0;
}

interface FontSize {
  xs: _0;
  sm: _0;
  md: _0;
  lg: _0;
  xl: _0;
  '2xl': _0;
  '3xl': _0;
  '4xl': _0;
}

interface TextDecoration {
  underline: _0;
  none: _0;
  lineThrough: _0;
}

interface FontWeight {
  regular: _0;
  medium: _0;
  semibold: _0;
  bold: _0;
  regularItalic: _0;
  mediumItalic: _0;
}

interface Typography {
  body: Body;
  label: Label;
  title: Body;
  headline: Label;
  display: Display;
}

interface Display {
  md: Md;
  lg: Md;
}

interface Label {
  sm: Md;
  md: Md;
}

interface Body {
  md: Md;
  lg: Md;
  sm: Md;
}

interface Md {
  value: Value;
}

interface Value {
  fontFamily: string;
  fontWeight: string;
  fontSize: string;
  lineHeight: string;
  letterSpacing: string;
}

interface FontFamily {
  inter: _0;
  notoSans: _0;
}

interface Colors {
  primitive: Primitive;
  semantic: Semantic;
}

interface Semantic {
  content: Content;
  background: Background;
  surface: Surface;
  shadow: Shadow;
  scrim: Danger;
  skeleton: Skeleton;
  border: Border;
}

interface Border {
  neutral: Neutral4;
  neuroidPrimary: Danger;
  danger: Danger;
  warning: Danger;
  success: Danger;
  informative: Danger;
  zoltarinaPrimary: Danger;
  heydPrimary: Danger;
  heybeePrimary: Danger;
}

interface Neutral4 {
  default: _0;
  subtle: _0;
  disabled: _0;
}

interface Skeleton {
  default: _0;
  subtle: _0;
}

interface Shadow {
  overlay: _0;
  raised: _0;
}

interface Surface {
  base: _0;
  layer_1: _0;
  layer_2: _0;
}

interface Background {
  neutral: Neutral3;
  neuroidPrimary: NeuroidPrimary2;
  neuroidSecondary: NeuroidPrimary2;
  danger: NeuroidPrimary2;
  warning: NeuroidPrimary2;
  success: NeuroidPrimary2;
  informative: NeuroidPrimary2;
  zoltarinaPrimary: NeuroidPrimary2;
  zoltarinaSecondary: NeuroidPrimary2;
  heydPrimary: NeuroidPrimary2;
  heydSecondary: NeuroidPrimary2;
  static: Static2;
  heybeePrimary: NeuroidPrimary2;
  neutralInverse: Neutral3;
}

interface Static2 {
  whiteAlpha: WhiteAlpha;
  blackAlpha: WhiteAlpha;
}

interface WhiteAlpha {
  bold: _0;
  default: _0;
  selected: _0;
  disabled: _0;
}

interface NeuroidPrimary2 {
  default: _0;
  selected: _0;
}

interface Neutral3 {
  default: _0;
  selected: _0;
  disabled: _0;
}

interface Content {
  neutral: Neutral2;
  neuroidPrimary: NeuroidPrimary;
  danger: Danger;
  warning: Danger;
  success: Danger;
  informative: Danger;
  zoltarinaPrimary: NeuroidPrimary;
  heydPrimary: NeuroidPrimary;
  static: Static;
  heybeePrimary: NeuroidPrimary;
  neutralInverse: Neutral2;
}

interface Static {
  white: White;
  black: White;
}

interface White {
  bold: _0;
  default: _0;
  subtle: _0;
  subtlest: _0;
  disabled: _0;
}

interface Danger {
  default: _0;
}

interface NeuroidPrimary {
  default: _0;
  default_inverse: _0;
}

interface Neutral2 {
  bold: _0;
  default: _0;
  subtle: _0;
  subtlest: _0;
  disabled: _0;
  default_inverse: _0;
}

interface Primitive {
  neutral: Neutral;
  black: Black;
  white: Black;
  red: Red;
  orange: Red;
  blue: Red;
  green: Red;
  purple: Red;
  ohre: Red;
  cyan: Red;
  yellow: Red;
}

interface Red {
  '100': _0;
  '200': _0;
  '300': _0;
  '400': _0;
  '500': _0;
  '600': _0;
  '700': _0;
  '800': _0;
  '900': _0;
  '1000': _0;
}

interface Black {
  '700A': _0;
  '600A': _0;
  '500A': _0;
  '400A': _0;
  '300A': _0;
  '200A': _0;
  '100A': _0;
}

interface Neutral {
  '0': _0;
  '100': _0;
  '200': _0;
  '300': _0;
  '400': _0;
  '500': _0;
  '600': _0;
  '700': _0;
  '800': _0;
  '900': _0;
  '1000': _0;
  '1050': _0;
  '1100': _0;
  '1200': _0;
}

interface _0 {
  value: string;
}