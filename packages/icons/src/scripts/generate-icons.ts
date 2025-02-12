import fs from 'fs'
import path from 'path'
import prettier from 'prettier'

type IconaDataType = {
  [name: string]: {
    svg: string
    name: string
    metadatas: string[]
    png: Record<string, string>
  }
}
const templatePath = path.resolve('src/templates/IconComponent.tsx')
const templateContent = fs.readFileSync(templatePath, 'utf-8')
const outputPath = path.resolve('src/components')
const iconsJsonPath = path.resolve('../../.icona/icons.json')

/**
 * 템플릿 문자열 변환
 * @param name 아이콘 이름
 * @param svgPath SVG path들
 * @returns 템플릿 문자열
 */
const convertTemplateToString = (name: string, svgPath: string) => {
  return templateContent.replaceAll('IconComponent', `${name}Icon`).replace('{props.children}', svgPath)
}

/**
 * 유효하지 않은 문자 제거
 * @param str 문자열
 * @returns [a-zA-Z0-9-_]로만 이루어진 유효한 문자열
 */
const removeInvalidCharacters = (str: string) => {
  return str.replace(/[^a-zA-Z0-9-_ ]/g, '').replace(/\s+/g, '-')
}

const toPascalCase = (str: string) => {
  return str
    .replace(/([-_][a-z0-9])/g, (group) => group.replaceAll('-', '').replaceAll('_', '').toUpperCase())
    .replace(/^[a-z]/, (firstLetter) => firstLetter.toUpperCase())
}

/**
 * Remove fill attribute from svg tag string
 * @param svgString SVG 문자열
 * @returns fill 속성이 제거된 SVG 문자열
 */
const removeFillStrokeAttribute = (svgString: string): string => {
  const fillRegex = /fill="(?!none")[^"]*"/g
  const strokeRegex = /stroke="(?!none")[^"]*"/g
  return svgString.replace(fillRegex, 'fill={color}').replace(strokeRegex, 'stroke={color}')
}

/**
 * SVG 문자열에서 path와 circle 태그들을 추출
 * @param svgString SVG 문자열
 * @returns path와 circle 태그들의 배열
 */
const getSvgPaths = (svgString: string): string[] => {
  const elementRegex = /<(path|circle)[^>]*?\/>/g
  const elements = svgString.match(elementRegex)
  return elements ? elements : []
}

/**
 * 아이콘 데이터 파싱
 * @param icon 아이콘 데이터
 * @returns 아이콘 파일명 SVG path들
 */
const processIconData = (icon: IconaDataType[string]) => {
  if (!icon.name || !icon.svg) {
    return null
  }
  const iconName = icon.name.replace('_24', '')
  const filename = path.basename(toPascalCase(removeInvalidCharacters(iconName)), '.tsx')
  const svgPath = getSvgPaths(icon.svg).join('\n')

  if (svgPath) {
    return { filename, svgPath: toPascalCase(removeFillStrokeAttribute(svgPath)) }
  }
  return null
}

/**
 * 아이콘 파일 생성
 * @param name 아이콘 이름
 * @param svgPath SVG path들
 */
const generateIconFile = async (name: string, svgPath: string) => {
  const outputFilePath = path.join(outputPath, `${name}Icon.tsx`)
  const stringifiedPath = `<g>${svgPath.replace(/\n/g, '')}</g>`
  const outputFileContent = convertTemplateToString(name, stringifiedPath)

  // prettier로 포맷팅
  const prettierConfig = await prettier.resolveConfig(process.cwd())
  const formattedContent = await prettier.format(outputFileContent, {
    ...prettierConfig,
    parser: 'typescript',
  })

  fs.writeFileSync(outputFilePath, formattedContent)
}

const generateIcons = async () => {
  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true })
  }

  const iconsJsonContent = fs.readFileSync(iconsJsonPath, 'utf8')
  const iconsData: IconaDataType = JSON.parse(iconsJsonContent)

  const transformedIcons: Record<string, string> = {}

  // 아이콘 데이터 파싱
  Object.values(iconsData).forEach((icon) => {
    const result = processIconData(icon)
    if (result) {
      transformedIcons[result.filename] = result.svgPath
    }
  })

  // Promise.all을 사용하여 비동기 처리
  await Promise.all(Object.entries(transformedIcons).map(([name, svgPath]) => generateIconFile(name, svgPath)))

  console.log('Icon files have been generated in', outputPath)
}

generateIcons().catch(console.error)
