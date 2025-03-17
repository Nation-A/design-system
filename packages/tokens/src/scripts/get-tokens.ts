import { join } from 'path'
import { readFile } from 'fs/promises'

export const getTokens = async () => {
  const tokensPath = join(__dirname, '../../../../tokens.json')
  const rawData = await readFile(tokensPath, 'utf-8')
  const tokens = JSON.parse(rawData)
  const transformedTokens = transformTokens(tokens)
  return transformedTokens as RawTokens
}

const transformTokens = (tokens: any): any => {
  const camelCaseTokens = transformKeysToCamelCase(tokens.NDS)
  const tokensWithoutType = removeDTCG(camelCaseTokens)
  return tokensWithoutType
}

/**
 * W3C DTCG 타입의 토큰 정보를 제거하는 함수
 * @param obj {...{'$type': string, '$value': string}}
 * @returns {...{value: string}}
 */
const removeDTCG = (obj: any): any => {
  if (Array.isArray(obj)) {
    return obj.map(removeDTCG)
  }

  if (obj !== null && typeof obj === 'object') {
    // 가장 leaf 오브젝트인지 확인
    if ('$type' in obj && '$value' in obj) {
      return { value: obj['$value'] }
    }

    return Object.keys(obj).reduce((acc, key) => {
      acc[key] = removeDTCG(obj[key])
      return acc
    }, {} as any)
  }

  return obj
}

const transformKeysToCamelCase = (obj: any): any => {
  if (Array.isArray(obj)) {
    return obj.map((item) => transformKeysToCamelCase(item))
  }

  if (obj !== null && typeof obj === 'object') {
    return Object.keys(obj).reduce((acc, key) => {
      const camelKey = key
        .replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())
        .replace(/^[A-Z]/, (x) => x.toLowerCase())

      acc[camelKey] = transformKeysToCamelCase(obj[key])
      return acc
    }, {} as any)
  }

  return obj
}
