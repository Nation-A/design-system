# NDS (Nation-A Design System)

Nation-A의 공통 디자인 토큰 및 컴포넌트 관리를 위한 디자인시스템 저장소입니다.

## 시작하기

### 요구사항

- Node.js 18.x 이상
- pnpm 9.x 이상

### 설치

```bash
pnpm install
```

## 패키지 구조

이 프로젝트는 모노레포로 구성되어 있으며, 다음과 같은 패키지들을 포함합니다:

### Core 패키지 (packages/)

- `@nation-a/tokens`: 디자인 토큰 (색상, 타이포그래피 등) & 변환 스크립트
- `@nation-a/icons`: SVG 아이콘 컴포넌트 & 변환 스크립트
- `@nation-a/ui`: 공통 UI 컴포넌트

### 앱 (apps/)

- `test-app`: 컴포넌트 테스트를 위한 데모 애플리케이션

## 개발

### 테스트 앱 실행

```bash
pnpm dev:test
```

### 아이콘 패키지 빌드

```bash
pnpm build:icons
```

### 토큰 패키지 빌드

TBA

## 패키지 설명

### @nation-a/tokens [TODO]

- 디자인 시스템의 기본이 되는 디자인 토큰을 관리
- [Tokens Studio](https://tokens.studio/)를 통해 export 된 `tokens.json`을 변환
- [TBA] [Style Dictionary](https://amzn.github.io/style-dictionary/)를 사용하여 변환

### @nation-a/icons [WIP]

- Icona에서 추출된 SVG 아이콘을 React 컴포넌트로 변환하여 제공
- 자동 생성 스크립트를 통한 아이콘 컴포넌트 생성
- 크기와 색상 등 풀커스터마이징 지원

### @nation-a/ui [TODO]

- 디자인 시스템의 핵심 UI 컴포넌트 제공
- @emotion/styled를 사용한 스타일링
- 디자인 토큰 기반의 일관된 스타일 적용

## 주요 워크플로우 설명

### 디자인 토큰 생성 [WIP]

1. 최초 피그마에서 [Tokens Studio](https://www.figma.com/community/plugin/843461159747178978/tokens-studio-for-figma-figma-tokens) 플러그인을 통해 `tokens.json`이 생성됩니다.
2. [tokens-transformer](https://www.npmjs.com/package/token-transformer)를 통해 1차 가공을 하여 `transformed.json`을 생성합니다.
3. [style-dictionary](https://www.npmjs.com/package/style-dictionary)를 통해 변환 `.ts`를 생성합니다.
4. TBA

### 아이콘 파이프라인

1. 최초 피그마에서 [Icona](https://www.figma.com/community/plugin/1246320822364150095) 플러그인을 통해 생성된 PR을 머지하면 `.icona/icons.json`이 생성됩니다.
2. main에서 변경사항이 감지되면 파이프라인(`build-icons.yml`)을 트리거 시킵니다.
3. export된 svg에 대해 필요없는 태그와 `fill`, `stroke` 등의 속성을 제거 후 템플릿에 맞추어 리액트 컴포넌트로 변환합니다.
4. 이후 index.ts 자동 생성 후 vite에 의해 번들링 됩니다
5. [WIP] npm에 CI/CD가 돌아갑니다
6. 변경사항은 bot에 의해 커밋으로 생성됩니다.

## 기술 스택

- **언어:** TypeScript
- **번들러:** Vite, tsup
- **패키지 관리:** pnpm
- **모노레포 관리:** Turborepo
- **스타일링:** @emotion/styled
- **타입 생성:** vite-plugin-dts

## 버전 관리

- 패키지 버전 관리를 위해 Changesets를 사용합니다.
