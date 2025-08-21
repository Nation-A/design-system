#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import readline from 'readline'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import process from 'node:process'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const componentsDir = path.join(__dirname, '../components')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

// Template for a basic component test
const generateTestTemplate = (componentName) => `import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '../../test/utils'
import ${componentName} from './index'

describe('${componentName}', () => {
  it('renders correctly with default props', () => {
    render(<${componentName} />)
    // Add assertions specific to this component
  })

  // Add more test cases specific to this component
})
`

// Get all component directories
const componentDirs = fs
  .readdirSync(componentsDir)
  .filter((dir) => fs.statSync(path.join(componentsDir, dir)).isDirectory())
  .filter((dir) => dir !== 'index.ts') // Skip any non-component directories
  .filter((dir) => {
    // Skip directories that already have test files
    const files = fs.readdirSync(path.join(componentsDir, dir))
    return !files.some((file) => file.endsWith('.test.tsx'))
  })

if (componentDirs.length === 0) {
  console.log('All components already have test files or no components found.')
  rl.close()
  process.exit(0)
}

console.log('The following components do not have test files:')
componentDirs.forEach((dir, index) => {
  console.log(`${index + 1}. ${dir}`)
})

console.log('\nChoose components to generate tests for (comma-separated numbers, "all" for all, or "q" to quit):')
rl.question('> ', (answer) => {
  if (answer.toLowerCase() === 'q') {
    rl.close()
    return
  }

  let componentsToGenerate = []

  if (answer.toLowerCase() === 'all') {
    componentsToGenerate = componentDirs
  } else {
    const selectedIndices = answer.split(',').map((num) => parseInt(num.trim(), 10) - 1)
    componentsToGenerate = selectedIndices.map((index) => componentDirs[index]).filter(Boolean)
  }

  if (componentsToGenerate.length === 0) {
    console.log('No valid components selected.')
    rl.close()
    return
  }

  // Generate test files
  componentsToGenerate.forEach((componentName) => {
    const testFilePath = path.join(componentsDir, componentName, `${componentName}.test.tsx`)
    fs.writeFileSync(testFilePath, generateTestTemplate(componentName))
    console.log(`Generated test file for ${componentName}`)
  })

  console.log('\nDone! Remember to customize the generated tests for each component.')
  rl.close()
})
