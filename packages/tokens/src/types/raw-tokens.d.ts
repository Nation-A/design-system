// This file is auto-generated from tokens.json

interface RawTokens {
  colors: Colors;
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
  fontFamily: FontFamily;
  textCase: TextCase;
  paragraphIndent: ParagraphIndent;
}

interface ParagraphIndent {
  '0': _0;
}

interface TextCase {
  none: _0;
}

interface FontFamily {
  freeman: _0;
  dmSans: _0;
  pretendard: _0;
  notoSans: _0;
  inter: _0;
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
}

interface Typography {
  body: Body;
  label: Label;
  title: Body;
  headline: Label;
  display: Display;
  en: En;
  kr: En;
}

interface En {
  title: Title;
  text: Text;
  label: Label2;
}

interface Label2 {
  caption: Caption;
}

interface Caption {
  '10': _10;
  '12': _10;
  '14': _142;
}

interface _142 {
  semibold: Md;
}

interface _10 {
  regular: Md;
  semibold: Md;
}

interface Text {
  chat: Chat;
  body: Chat;
}

interface Chat {
  '14': _14;
  '16': _14;
}

interface _14 {
  bold: Md;
  regular: Md;
}

interface Title {
  main: Main;
  sub: Sub;
}

interface Sub {
  '16': _22;
  '18': _22;
  '20': _22;
}

interface Main {
  '22': _22;
  '24': _22;
  '28': _22;
  '30': _22;
  '56': _22;
}

interface _22 {
  bold: Md;
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
  v3: Danger;
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
  white: White2;
  black: White2;
}

interface White2 {
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
  white: White;
  red: Red;
  orange: Red;
  blue: Red;
  green: Red;
  purple: Red;
  ohre: Red;
  cyan: Red;
  yellow: Red;
  v3: V3;
}

interface V3 {
  blue: _0;
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

interface White {
  '1000A': _0;
  '900A': _0;
  '800A': _0;
  '700A': _0;
  '600A': _0;
  '500A': _0;
  '400A': _0;
  '300A': _0;
  '200A': _0;
  '100A': _0;
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