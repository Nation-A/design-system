# Next.js 테스트 애플리케이션

Nation-A 디자인 시스템 컴포넌트를 Next.js 환경에서 테스트하기 위한 예제 애플리케이션입니다.

## 기술 스택

- **프레임워크**: Next.js 15.x (Turbopack 사용)
- **언어**: TypeScript
- **스타일링**: Tailwind CSS 4.x
- **디자인 시스템**: @nation-a/ui, @nation-a/icons

## 시작하기

### 개발 서버 실행

```bash
# 개발 서버 실행
pnpm dev

# 또는 워크스페이스 루트에서
pnpm dev:test
```

개발 서버는 [http://localhost:3000](http://localhost:3000)에서 실행됩니다.

### 빌드

```bash
# 프로덕션용 빌드
pnpm build
```

### 실행

```bash
# 빌드된 앱 실행
pnpm start
```

## 프로젝트 구조

```
next-app/
├── app/            # App Router
│   ├── components/ # 앱 컴포넌트
│   ├── api/        # API 라우트
│   └── ...         # 페이지 라우트
├── public/         # 정적 파일
├── styles/         # 글로벌 스타일
└── ...
```

## API 라우트

API 라우트는 [http://localhost:3000/api/hello](http://localhost:3000/api/hello)에서 접근할 수 있습니다. 이 엔드포인트는 `app/api/hello/route.ts` 파일에서 수정할 수 있습니다.

## 프로젝트 목적

이 프로젝트는 다음과 같은 목적으로 사용됩니다:

1. Nation-A 디자인 시스템 컴포넌트의 실제 Next.js 환경에서의 사용성 테스트
2. Next.js의 최신 기능과 디자인 시스템의 호환성 검증
3. 컴포넌트 간의 상호작용 테스트
4. 실제 사용 예시 및 패턴 검증

## 라이선스

이 프로젝트는 비공개 프로젝트로 Nation-A 내부 사용 목적으로 제작되었습니다.
