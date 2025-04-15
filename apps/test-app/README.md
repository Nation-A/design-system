# Vite 테스트 애플리케이션

Nation-A 디자인 시스템 컴포넌트를 Vite 환경에서 테스트하기 위한 예제 애플리케이션입니다.

## 기술 스택

- **빌드 도구**: Vite 6.x
- **언어**: TypeScript
- **프레임워크**: React 18.x
- **스타일링**: PandaCSS
- **디자인 시스템**: @nation-a/ui, @nation-a/icons

## 시작하기

### 개발 서버 실행

```bash
# 개발 서버 실행
pnpm dev
```

개발 서버는 [http://localhost:5173](http://localhost:5173)에서 실행됩니다.

### 빌드

```bash
# 프로덕션용 빌드
pnpm build
```

### 미리보기

```bash
# 빌드된 앱 미리보기
pnpm preview
```

## 프로젝트 구조

```
test-app/
├── src/
│   ├── components/ # 애플리케이션 컴포넌트
│   ├── pages/      # 페이지 컴포넌트
│   ├── hooks/      # 커스텀 훅
│   ├── utils/      # 유틸리티 함수
│   ├── App.tsx     # 메인 애플리케이션 컴포넌트
│   └── main.tsx    # 진입점
├── public/         # 정적 파일
└── ...
```

## 프로젝트 목적

이 프로젝트는 다음과 같은 목적으로 사용됩니다:

1. Nation-A 디자인 시스템 컴포넌트의 Vite 환경에서의 사용성 테스트
2. 컴포넌트 통합 및 상호작용 검증
3. 빠른 개발 환경과 HMR을 활용한 컴포넌트 테스트
4. 디자인 시스템과 Vite의 호환성 검증

## PandaCSS 통합

이 프로젝트는 PandaCSS를 사용하여 스타일링합니다. PandaCSS는 @nation-a/ui 패키지의 스타일 시스템과 통합되어 있습니다.

```bash
# PandaCSS 코드 생성
pnpm panda:codegen
```

## 라이선스

이 프로젝트는 비공개 프로젝트로 Nation-A 내부 사용 목적으로 제작되었습니다.
