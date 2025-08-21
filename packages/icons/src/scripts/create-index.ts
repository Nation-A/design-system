/**
 * icons 디렉토리에 있는 아이콘들을 index.ts 파일로 export 하는 스크립트
 */

import fs from 'fs'
import path from 'path'
const iconsDirectory = path.resolve('src/components')

const indexFilePath = path.join(iconsDirectory, 'index.ts')
if (fs.existsSync(indexFilePath)) {
  fs.unlinkSync(indexFilePath)
}

/**
 * 디렉토리에서 .tsx 파일들을 찾아서 export 문자열 배열로 반환
 * @param directory 디렉토리 경로
 * @param prefix export 경로의 prefix (ex: './')
 * @returns export 문자열 배열
 */
const getExportsFromDirectory = (directory: string, prefix: string = './'): string[] => {
  if (!fs.existsSync(directory)) {
    return []
  }

  const files = fs.readdirSync(directory)
  return files
    .filter((file) => file.endsWith('.tsx'))
    .map((file) => {
      const filename = path.basename(file, '.tsx')
      return `export { default as ${filename} } from '${prefix}${filename}';`
    })
}

// 메인 디렉토리의 아이콘들
const mainExports = getExportsFromDirectory(iconsDirectory)

// v3 디렉토리의 아이콘들
const v3Directory = path.join(iconsDirectory, 'v3')
const v3Exports = getExportsFromDirectory(v3Directory)

// 메인 index.ts 생성 (v3 아이콘들 제외)
const outputFilePath = path.join(iconsDirectory, 'index.ts')
const outputFileContent = mainExports.join('\n')

fs.writeFileSync(outputFilePath, outputFileContent)
console.log('Main index file generated in ', outputFilePath)

// v3 폴더에 별도 index.ts 생성
if (v3Exports.length > 0) {
  const v3IndexPath = path.join(v3Directory, 'index.ts')
  const v3IndexContent = v3Exports.join('\n')
  fs.writeFileSync(v3IndexPath, v3IndexContent)
  console.log('V3 index file generated in ', v3IndexPath)
}
