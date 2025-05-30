# @nation-a/ui

Nation-A 디자인 시스템의 UI 컴포넌트 라이브러리입니다. 모던하고 재사용 가능한 React 컴포넌트들을 제공합니다.

## 특징

- **PandaCSS 기반**: 타입 안전한 스타일링 시스템
- **접근성 중심**: Ark UI를 활용한 접근성 준수 컴포넌트
- **테마 지원**: 다크모드와 라이트모드를 포함한 테마 지원
- **Storybook 문서화**: 모든 컴포넌트에 대한 사용 예시와 문서
- **테스트**: 컴포넌트 테스트를 통한 품질 보장

## 설치

```bash
# npm
npm install @nation-a/ui

# yarn
yarn add @nation-a/ui

# pnpm
pnpm add @nation-a/ui
```

## 개발 환경 설정

```bash
# 의존성 설치
pnpm install

# Storybook 실행
pnpm storybook

# PandaCSS 코드 생성
pnpm panda
```

## 빌드

```bash
# 라이브러리 빌드
pnpm build
```

## 테스트

```bash
# 모든 테스트 실행
pnpm test

# 감시 모드로 테스트 실행
pnpm test:watch

# 테스트 커버리지 확인
pnpm test:coverage

# 새 컴포넌트를 위한 테스트 파일 생성
pnpm generate-tests
```

### 테스트 환경

테스트 환경은 다음 도구를 사용합니다:

- Vitest - 테스트 실행기
- React Testing Library - React 컴포넌트 테스트
- Happy DOM - DOM 시뮬레이션
- Jest DOM - DOM 매처 확장

자세한 내용은 `src/test/README.md`를 참조하세요.

## 의존성

- React 18.x
- @ark-ui/react
- @react-spring/web
- PandaCSS
- @nation-a/tokens
- @nation-a/icons

## 라이선스

MIT 라이선스
