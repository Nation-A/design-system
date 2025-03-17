import { join } from 'path'
import { getTokens } from './get-tokens'
import { writeFile } from 'fs/promises'
import prettier from 'prettier'

const formatValue = (tokens: any, callback: (value: any) => any = (value) => value): any => {
  if (Array.isArray(tokens)) {
    return tokens.map((token) => formatValue(token, callback))
  }

  if (tokens !== null && typeof tokens === 'object') {
    if ('value' in tokens) {
      const formattedValue = callback(tokens.value)
      return typeof formattedValue === 'string'
        ? (formattedValue.replaceAll('{', '${') as any)
        : Object.keys(formattedValue).reduce((acc, key) => {
            acc[key] = formattedValue[key].replaceAll('{', '${')
            return acc
          }, {} as any)
    }
    return Object.keys(tokens).reduce((acc, key) => {
      acc[key] = formatValue(tokens[key], callback)
      return acc
    }, {} as any)
  }

  return tokens
}

const camelToDashed = (str: string) => str.replace(/([A-Z])/g, '-$1').toLowerCase()

const flattenShadow = (tokens: any) =>
  formatValue(tokens, (value) => `${value.x}px ${value.y}px ${value.blur}px ${value.spread}px ${value.color}`)

const flattenTypography = (tokens: any) =>
  formatValue(tokens, (value) =>
    Object.entries(value)
      .map(([key, value]) => `${camelToDashed(key)}: ${value};`)
      .join(' '),
  )

const getPixelValues = (tokens: any) => formatValue(tokens, (value) => `${value}px`)

const getRemValues = (tokens: any) => formatValue(tokens, (value) => `${Number(value) / 16}rem`)

const renameColorCategory = (formattedContent: string) => {
  return formattedContent.replace(/colors\.primitive/g, 'primitiveColor').replace(/colors\.semantic/g, 'semanticColor')
}
const formatStringToTemplateLiteral = (input: string): string => {
  return input.replace(/'([^']*\$\{[^}]+\}[^']*)'/g, (_, match: string) => {
    const transformed = match.replace(/\{([^}]+)\}/g, (_, key: string) => {
      const splitted = key.split('.')
      const last = splitted.pop() || ''

      // 숫자로 시작하면 `['숫자']`, 아니면 `dot notation`
      const formattedLast = /^\d/.test(last) ? `['${last}']` : `.${last}`

      return `{${splitted.join('.')}${formattedLast}}`
    })
    return `\`${transformed}\``
  })
}
const formatTokensFile = async (tokens: any) => {
  const tokensString = Object.entries(tokens)
    .map(([key, value]) => `export const ${key} = ${JSON.stringify(value, null, 2)}`)
    .join('\n')
  const renamedTokensString = renameColorCategory(tokensString)
  const prettierConfig = await prettier.resolveConfig(process.cwd())
  const formattedContent = await prettier.format(renamedTokensString, {
    ...prettierConfig,
    parser: 'typescript',
  })

  return formatStringToTemplateLiteral(formattedContent)
}

const parseTokensEmotion = async () => {
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
    textDecoration,
  } = rawTokens
  const tokens = {
    primitiveColor: formatValue(colors.primitive),
    semanticColor: formatValue(colors.semantic),
    shadow: flattenShadow(shadow),
    borderWidth: getPixelValues(borderWidth),
    spacing: getRemValues(spacing),
    radii: getPixelValues(radii),
    fontSize: getRemValues(fontSize),
    letterSpacing: getPixelValues(letterSpacing),
    lineHeight: getRemValues(lineHeight),
    fontWeight: formatValue(fontWeight),
    fontFamily: formatValue(fontFamily),
    typography: flattenTypography(typography),
    textDecoration: formatValue(textDecoration),
  }

  const formattedContent = await formatTokensFile(tokens)

  const typesPath = join(__dirname, '../tokens/tokens-emotion.ts')
  await writeFile(typesPath, formattedContent, 'utf-8')
}

parseTokensEmotion()
