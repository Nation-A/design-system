# @nation-a/tokens

Nation-A 디자인 시스템의 디자인 토큰 패키지입니다. 색상, 타이포그래피, 간격, 그림자 등 디자인 시스템의 핵심 값들을 관리합니다.

## 특징

- **다양한 포맷 지원**: JavaScript/TypeScript, CSS, JSON 등 다양한 포맷으로 토큰 변환
- **타입 안전**: TypeScript 타입 정의 포함
- **피그마 연동**: Tokens Studio에서 추출된 토큰 활용
- **PandaCSS 및 Emotion 지원**: 주요 스타일링 라이브러리와 호환

## 설치

```bash
# npm
npm install @nation-a/tokens

# yarn
yarn add @nation-a/tokens

# pnpm
pnpm add @nation-a/tokens
```

## 사용법

### PandaCSS에서 사용

```ts
// panda.config.ts
import { defineConfig } from '@pandacss/dev'
import { pandaTokens } from '@nation-a/tokens/pandacss'

export default defineConfig({
  theme: {
    extend: {
      tokens: pandaTokens.primitive,
      semanticTokens: pandaTokens.semantic,
      textStyles: pandaTokens.textStyles,
    },
  },
})
```

### Emotion에서 사용

```tsx
import { ThemeProvider } from '@emotion/react';
import { emotionTokens } from '@nation-a/tokens/emotion'

...
  <ThemeProvider theme={emotionTokens.dark}>
...
```

## 토큰 생성 프로세스

1. 피그마에서 [Tokens Studio](https://www.figma.com/community/plugin/843461159747178978/tokens-studio-for-figma-figma-tokens) 플러그인을 통해 토큰을 추출합니다.
2. 추출된 JSON 파일은 프로젝트 루트의 `tokens.json`에 저장됩니다.
3. 빌드 프로세스에서 이 JSON 파일을 다양한 포맷으로 변환합니다:
   - TypeScript 타입 정의 생성
   - PandaCSS 호환 포맷 생성
   - Emotion 호환 포맷 생성

## 개발

```bash
# 의존성 설치
pnpm install

# 토큰 빌드
pnpm build
```

## 라이선스

MIT 라이선스
