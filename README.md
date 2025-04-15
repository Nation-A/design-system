# NDS (Nation-A Design System)

Nation-A의 공통 디자인 토큰 및 컴포넌트 관리를 위한 디자인시스템 저장소입니다.

## 패키지 구조

이 프로젝트는 모노레포로 구성되어 있으며, 다음과 같은 패키지들을 포함합니다:

### Core 패키지 (packages/)

- `@nation-a/tokens`: 디자인 토큰 (색상, 타이포그래피 등) & 변환 스크립트
- `@nation-a/icons`: SVG 아이콘 컴포넌트 & 변환 스크립트
- `@nation-a/ui`: 공통 UI 컴포넌트

### 앱 (apps/)

- `test-app`: 컴포넌트 테스트를 위한 pandaCSS + vite 기반 애플리케이션
- `next-app`: 컴포넌트 테스트를 위한 tailwind + next 기반 애플리케이션

## 시작하기

### 요구사항

- Node.js 18.x 이상
- pnpm 9.x 이상

### 설치

```bash
pnpm install
```

### 개발

```bash
# 모든 패키지 개발 모드 실행
pnpm dev

# UI 컴포넌트 스토리북 실행 (http://localhost:6006)
pnpm dev:ui

# 예제 Next.js 앱 실행 (http://localhost:3000)
pnpm dev:test
```

### 빌드

```bash

# 모든 패키지 빌드

pnpm build

# 개별 패키지 빌드

pnpm build:tokens
pnpm build:icons
pnpm build:ui

```

## 패키지 설명

### @nation-a/tokens

- 디자인 시스템의 기본이 되는 디자인 토큰을 관리
- [Tokens Studio](https://tokens.studio/)를 통해 export 된 `tokens.json`을 변환

### @nation-a/icons

- Icona에서 추출된 SVG 아이콘을 React 컴포넌트로 변환하여 제공
- 자동 생성 스크립트를 통한 아이콘 컴포넌트 생성
- 크기와 색상 등 풀커스터마이징 지원

### @nation-a/ui

- 디자인 시스템의 핵심 UI 컴포넌트 제공
- pandaCSS의 util 및 theme preset을 export
- pandaCSS를 사용한 스타일링
- 디자인 토큰 기반의 일관된 스타일 적용

## 주요 워크플로우 설명

### 디자인 토큰 생성

1. 최초 피그마에서 [Tokens Studio](https://www.figma.com/community/plugin/843461159747178978/tokens-studio-for-figma-figma-tokens) 플러그인을 통해 `tokens.json`이 생성됩니다.
2. 스크립트를 통해 emotion, pandaCSS theme에 적용가능한 토큰이 생성됩니다.

### 아이콘 파이프라인

1. 최초 피그마에서 [Icona](https://www.figma.com/community/plugin/1246320822364150095) 플러그인을 통해 생성된 PR을 머지하면 `.icona/icons.json`이 생성됩니다.
2. export된 svg에 대해 필요없는 태그와 `fill`, `stroke` 등의 속성을 제거 후 템플릿에 맞추어 리액트 컴포넌트로 변환합니다.
3. 이후 index.ts 자동 생성 후 vite에 의해 번들링 됩니다

### UI 파이프라인

1. PandaCSS의 codegen 기능을 통해 token기반 스타일링 유틸이 생성됩니다
2. 내부에 사용된 모든 css class들은 정적으로 추출됩니다
3. vite 내장 rollup에 의해 번들링이 이루어지며, styled-system 폴더는 dist에 static하게 복사가 되어 제공됩니다

## 기술 스택

- **언어:** TypeScript
- **번들러:** Vite, tsup
- **패키지 관리:** pnpm
- **모노레포 관리:** Turborepo
- **스타일링:** PandaCSS
- **버전 관리:** Changesets

## 패키지 사용하기

### 설치

```bash
# npm
npm install @nation-a/ui @nation-a/icons @nation-a/tokens

# yarn
yarn add @nation-a/ui @nation-a/icons @nation-a/tokens

# pnpm
pnpm add @nation-a/ui @nation-a/icons @nation-a/tokens
```

### 사용 예시

```tsx
import { Button, Text } from '@nation-a/ui'
import { HomeIcon } from '@nation-a/icons'

function App() {
  return (
    <Stack gap={2}>
      <Text>Nation-A 디자인 시스템에 오신 것을 환영합니다</Text>
      <Button variant="solid">홈으로 가기</Button>
    </Stack>
  )
}
```

## 라이선스

이 프로젝트는 [MIT 라이선스](LICENSE)를 따릅니다.
