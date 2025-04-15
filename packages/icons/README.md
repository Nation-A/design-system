# @nation-a/icons

Nation-A 디자인 시스템의 SVG 아이콘 컴포넌트 라이브러리입니다. Icona에서 추출된 SVG를 React 컴포넌트로 변환하여 제공합니다.

## 특징

- **최적화된 SVG**: 불필요한 태그와 속성을 제거한 경량 SVG
- **React 컴포넌트**: 모든 아이콘이 React 컴포넌트로 제공됨
- **커스터마이징 가능**: 색상, 크기 등을 쉽게 변경 가능
- **타입 지원**: TypeScript 타입 정의 포함
- **자동 생성**: 자동화된 스크립트를 통한 아이콘 컴포넌트 생성

## 설치

```bash
# npm
npm install @nation-a/icons

# yarn
yarn add @nation-a/icons

# pnpm
pnpm add @nation-a/icons
```

## 사용법

```tsx
import { HomeIcon, SearchIcon, MenuIcon } from '@nation-a/icons'

function MyComponent() {
  return (
    <div>
      <HomeIcon size={24} color="blue" />
      <SearchIcon size={20} color="#FF5733" />
      <MenuIcon size="1.2em" />
    </div>
  )
}
```

## 아이콘 속성

모든 아이콘 컴포넌트는 다음 속성을 지원합니다:

| 속성  | 타입             | 기본값         | 설명          |
| ----- | ---------------- | -------------- | ------------- |
| size  | number \| string | '1em'          | 아이콘의 크기 |
| color | string           | 'currentColor' | 아이콘의 색상 |

추가로 모든 표준 SVG 속성을 지원합니다.

## 아이콘 파이프라인

1. 피그마에서 [Icona](https://www.figma.com/community/plugin/1246320822364150095) 플러그인을 통해 아이콘이 생성됩니다.
2. 생성된 `.icona/icons.json` 파일을 기반으로 SVG 파일을 추출합니다.
3. 추출된 SVG에서 불필요한 태그와 속성을 제거하고 최적화합니다.
4. 최적화된 SVG를 React 컴포넌트로 변환합니다.
5. 모든 아이콘에 대한 인덱스 파일을 자동 생성합니다.
6. 변환된 컴포넌트를 Vite로 번들링합니다.

## 개발

```bash
# 의존성 설치
pnpm install

# 아이콘 생성 및 빌드
pnpm build
```

## 라이선스

MIT 라이선스
