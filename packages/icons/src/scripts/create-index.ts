/**
 * icons 디렉토리에 있는 아이콘들을 index.ts 파일로 export 하는 스크립트
 */

import fs from 'fs';
import path from 'path';
const iconsDirectory = path.resolve('src/components');

const indexFilePath = path.join(iconsDirectory, 'index.ts');
if (fs.existsSync(indexFilePath)) {
  fs.unlinkSync(indexFilePath);
}

fs.readdir(iconsDirectory, (err, files) => {
  if (err) {
    console.error('Error reading icons directory:', err);
    return;
  }

  const filenames = files.map(file => path.basename(file, '.tsx'));
  const outputFilePath = path.join(iconsDirectory, 'index.ts');

  const outputFileContent = filenames
    .map(filename => `export { default as ${filename} } from './${filename}';`)
    .join('\n');

  fs.writeFileSync(outputFilePath, outputFileContent);

  console.log('index file of icons were generated in ', outputFilePath);
});