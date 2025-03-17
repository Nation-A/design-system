import { writeFile } from 'fs/promises'
import { join } from 'path'
import JsonToTS from 'json-to-ts'
import { getTokens } from './get-tokens'

const generateTokenTypes = async () => {
  try {
    // tokens.json 읽기
    const tokens = await getTokens()

    // json-to-ts를 사용하여 타입 생성
    const interfaces = JsonToTS(tokens, { rootName: 'RawTokens' }).join('\n\n')
    const typescript = `// This file is auto-generated from tokens.json\n\n${interfaces}`

    // types.ts 파일 생성
    const typesPath = join(__dirname, '../types/raw-tokens.d.ts')
    await writeFile(typesPath, typescript, 'utf-8')

    console.log('Token types generated successfully!')
    return tokens
  } catch (error) {
    console.error('Error generating token types:', error)
    throw error
  }
}

generateTokenTypes()
