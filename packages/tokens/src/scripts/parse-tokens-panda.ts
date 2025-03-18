import { join } from 'path'
import { getTokens } from './get-tokens'
import { writeFile } from 'fs/promises'
import prettier from 'prettier'

const parseTokens = async () => {
  const rawTokens = await getTokens()

  const {
    colors,
    shadow,
    typography,
    lineHeight,
    fontSize,
    letterSpacing,
    borderWidth,
    spacing,
    radii,
    fontWeight,
    fontFamily,
    // textDecoration,
  } = rawTokens
  const semantic = {
    colors: removePrimitive(colors.semantic),
    shadows: flattenShadow(shadow),
  }

  const primitive = {
    colors: colors.primitive,
    borderWidths: getPixelValues(borderWidth),
    spacing: getRemValues(spacing),
    radii: getPixelValues(radii),
    fontSizes: getRemValues(fontSize),
    letterSpacings: getPixelValues(letterSpacing),
    lineHeights: getRemValues(lineHeight),
    fontWeights: fontWeight,
    fonts: fontFamily,
    // textDecorations: textDecoration,
  }
  const textStyles = flattenTypography(typography)

  const tokens = {
    semantic,
    primitive,
    textStyles,
  }

  const formattedContent = await formatTokensFile(tokens)

  const typesPath = join(__dirname, '../tokens/tokens-panda.ts')
  await writeFile(typesPath, formattedContent, 'utf-8')
}

const formatTokensFile = async (tokens: any) => {
  const tokensString = Object.entries(tokens)
    .map(([key, value]) => `const ${key} = ${JSON.stringify(value, null, 2)}`)
    .join('\n')
  const tokensObject = `export const tokens = {${Object.keys(tokens).join(',\n')}} as const;`
  const prettierConfig = await prettier.resolveConfig(process.cwd())
  const formattedContent = await prettier.format(tokensString + '\n' + tokensObject, {
    ...prettierConfig,
    parser: 'typescript',
  })
  return formattedContent
}

const flattenShadow = (shadow: RawTokens['shadow']): any => {
  for (const [_, value] of Object.entries(shadow)) {
    const shadowValue = value.value
    value.value = `${shadowValue.x}px ${shadowValue.y}px ${shadowValue.blur}px ${shadowValue.spread}px ${shadowValue.color.replace('.semantic', '')}`
  }
  return shadow
}

const formatValue = (tokens: any, callback: (value: any) => string): any => {
  if (Array.isArray(tokens)) {
    return tokens.map((token) => formatValue(token, callback))
  }

  if (tokens !== null && typeof tokens === 'object') {
    if ('value' in tokens) {
      return { value: callback(tokens.value) }
    }
    return Object.keys(tokens).reduce((acc, key) => {
      acc[key] = formatValue(tokens[key], callback)
      return acc
    }, {} as any)
  }

  return tokens
}

const getPixelValues = (tokens: any) => formatValue(tokens, (value) => `${value}px`)

const getRemValues = (tokens: any) => formatValue(tokens, (value) => `${Number(value) / 16}rem`)

const removePrimitive = (colors: any) => formatValue(colors, (value) => value.replace('.primitive', ''))

const flattenTypography = (typography: any) =>
  formatValue(typography, (value) =>
    Object.entries(value).reduce((acc, [k, v]) => {
      acc[k] = typeof v === 'string' ? v.replace(`{${k}.`, '').replace('}', '') : v
      return acc
    }, {} as any),
  )

parseTokens()
