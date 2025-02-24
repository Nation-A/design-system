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
    shadows: formatShadow(shadow),
  }

  const primitive = {
    colors: colors.primitive,
    borderWidths: getPixelValues(borderWidth),
    spacing: getPixelValues(spacing),
    radii: getPixelValues(radii),
    fontSizes: getPixelValues(fontSize),
    letterSpacings: getPixelValues(letterSpacing),
    lineHeights: getPixelValues(lineHeight),
    fontWeights: fontWeight,
    fonts: fontFamily,
    // textDecorations: textDecoration,
  }
  const textStyles = formatTypography(typography)

  const tokens = {
    semantic,
    primitive,
    textStyles,
  }

  const formattedContent = await formatTokensString(tokens)

  const typesPath = join(__dirname, '../tokens/tokens.ts')
  await writeFile(typesPath, formattedContent, 'utf-8')
}

const formatTokensString = async (tokens: any) => {
  const tokensString = Object.entries(tokens)
    .map(([key, value]) => `export const ${key} = ${JSON.stringify(value, null, 2)}`)
    .join('\n')
  const prettierConfig = await prettier.resolveConfig(process.cwd())
  const formattedContent = await prettier.format(tokensString, {
    ...prettierConfig,
    parser: 'typescript',
  })
  return formattedContent
}

const formatShadow = (shadow: RawTokens['shadow']): any => {
  for (const [_, value] of Object.entries(shadow)) {
    const shadowValue = value.value
    value.value = `${shadowValue.x}px ${shadowValue.y}px ${shadowValue.blur}px ${shadowValue.spread}px ${shadowValue.color.replace('.semantic', '')}`
  }
  return shadow
}

const getPixelValues = (tokens: any): any => {
  if (Array.isArray(tokens)) {
    return tokens.map(getPixelValues)
  }

  if (tokens !== null && typeof tokens === 'object') {
    // 가장 leaf 오브젝트인지 확인
    if ('value' in tokens) {
      return { value: `${tokens.value}px` }
    }

    return Object.keys(tokens).reduce((acc, key) => {
      acc[key] = getPixelValues(tokens[key])
      return acc
    }, {} as any)
  }

  return tokens
}

const removePrimitive = (colors: any): any => {
  if (Array.isArray(colors)) {
    return colors.map(removePrimitive)
  }

  if (colors !== null && typeof colors === 'object') {
    // 가장 leaf 오브젝트인지 확인
    if ('value' in colors) {
      return { value: colors.value.replace('.primitive', '') }
    }

    return Object.keys(colors).reduce((acc, key) => {
      acc[key] = removePrimitive(colors[key])
      return acc
    }, {} as any)
  }

  return colors
}

const formatTypography = (typography: any): any => {
  if (Array.isArray(typography)) {
    return typography.map(formatTypography)
  }

  if (typography !== null && typeof typography === 'object') {
    // 가장 leaf 오브젝트인지 확인
    if ('value' in typography) {
      return {
        value: Object.entries(typography.value).reduce((acc, [k, v]) => {
          acc[k] = typeof v === 'string' ? v.replace(`{${k}.`, '').replace('}', '') : v
          return acc
        }, {} as any),
      }
    }

    return Object.keys(typography).reduce((acc, key) => {
      acc[key] = formatTypography(typography[key])
      return acc
    }, {} as any)
  }

  return typography
}

parseTokens()
