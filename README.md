# NDS (Nation-A Design System)

Nation-A의 공통 디자인 토큰 및 컴포넌트 관리를 위한 디자인시스템 저장소입니다.


## 패키지 구조
![NDS 구조](https://github.com/user-attachments/assets/1f368e38-1c1d-436c-b8b3-ad1c04b09c81)

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

## 주요 설계 철학

### 유지 보수 및 관리 편의성

- **코드만으로** 빠르게 레이아웃이 판단 가능해야함
- 부가적 문법없이 빠른 inline 방식의 스타일링
- variant 구조화 관리를 위해 recipe 형태의 스타일링 유틸 사용

### 타입안정성

- **토큰 기반**으로 theme을 생성하며, 자동완성 및 토큰의 이름에 1:1 매칭되는 value로 표현 가능해야함

### 컨테이너 앱과 독립적 환경 구성

- 빠른 적용을 위해 config를 최소로함.
- 동일 라이브러리 구성 없이도 사용 가능하도록 필요 요소(css 등)를 전부 외부로 노출시켜야함

### SSR 환경에서의 최적화

- runtime-css는 최대한 배제
- 추가적인 설정 없이 서버 컴포넌트 지원 가능하도록

## PandaCSS를 선택한 이유

### 기존 2개의 진영으로 부터의 피로도

#### Emotion

- Emotion은 현재 Next, RSC 등의 환경에서 성능 이슈 등 문제로 배척 받음
- Styled-component또한 공식 지원 종료하며 runtime-css 진영이 몰락중
- 매번 컴포넌트 이름을 짓고 토큰 사용을 위해 literal-css 내부에 theme을 inject하는 방식이 번거로움

#### Tailwind

- 유지보수 측면에서 가독성이 매우 떨어지며 스타일 시스템화에는 한계가 있는 구조
- 유틸 사용을 위한 러닝커브가 존재
- 동적 스타일링이 매우 힘드며, 토큰 타입 안정성이 지켜지기 어려운 구조

### 다른 선택지

- Stitches - 오래전 지원 종료
- Vanilla extract - 디자인시스템에는 좋지만, 프로덕트 스타일링은 번거로운 감이 있음
- 등등

### PandaCSS의 장점과 한계

**장점**

- 다양한 스타일링 방식을 지원
- **build-time-css** 로 SSR 지원 편함 + 부분적 동적스타일링 가능
- 토큰 기반 css object 작성이 가능함

**한계**

- build-time-css 로 라이브러리 제작시 css 직접 관리해주어야함
- 방식 자유도가 높아 팀 내 컨벤션이 중요함
- 현대 스타일링 방식을 다 모아놓은 형태로, 러닝커브가 상당함

### 다양한 스타일링 방식

#### a) css() 유틸  + pattern 방식

- 가독성이 떨어져 유지보수가 힘드나 빠른 작성이 가능한 방식

```tsx
export const InfoRow = () => {
  return (
		<div className={css({ display: "flex", gap: "1", align: "center" })}>
			<div className={css({ bg: "gray.100", px: "2", py: "1", borderRadius: "sm" })}>
				<span className={text({ textStyle: 'body.md' })}>More</span>
			</div>
		  <ArrowRightIcon />
		</div>
	)
}
```

#### b) styled, recipe 방식

- 설계에 리소스가 많이 들어 빠른 스타일링이 어려우나 구조화에는 강점이 있는 방식

```tsx
export const InfoRow = () => {
  return (
    <InfoBox>
      <Label>
        <LabelText>More</LabelText>
      </Label>
      <ArrowRightIcon />
    </InfoBox>
  )
}

const InfoBox = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    gap: "1",
  },
})

const Label = styled("div", {
  base: {
    bg: "gray.100",
    px: "2",
    py: "1",
    borderRadius: "sm",
  },
})

const LabelText = styled("span", {
  base: {
    textStyle: 'body.md'
  },
})
```

#### c) JSX preset + css property 방식

- 컴포넌트 설계 확장성은 떨어지지만 선언적 레이아웃 작성에 강점이 있는 방식

```tsx
export const InfoRow = () => {
  return (
    <HStack gap="1" align="center">
      <Box css={{ bg: "gray.100", px: 2, py: 1, borderRadius: "sm" }}>
        <Text textStyle="body.md">More</Text>
      </Box>
      <ArrowRightIcon />
    </HStack>
  )
}
```

### 참고 자료

- https://github.com/cschroeter/park-ui: ArkUI + PandaCSS 기반 컴포넌트들 참고

## 설계 방식

### 완전한 역할의 분리

- 디자인 시스템은 스타일의 구조화
    - cva, styled 등의 유틸 기반으로 **base style + variants**를 효율적으로 제어
    - 속도보다는 안정/범용성이 핵심 원칙
- 컨테이너 앱은 레이아웃 기반의 컴포넌트 조립
    - 단순 가로 정렬, 세로 정렬 등의 레이아웃의 조합으로 화면을 구성하며, 내부의 atom은 디자인시스템에서 추상화된 요소들만을 사용
    - 빠른 추가/수정이 핵심 원칙

### 컨벤션 - 디자인 시스템에서

- cva, sva, styled 기반의 스타일링 → 최대한 구조화 시키기

```tsx
// Button/button.recipe.ts
import { cva } from '@styled-system/css'

export type ButtonVariantProps = typeof buttonRecipe.__type

export const buttonRecipe = cva({
  base: {
    alignItems: 'center',
    appearance: 'none',
    ...
  },
  defaultVariants: {
    variant: 'solid',
    size: 'md',
    radius: 'full',
    color: 'neutral',
  },
  variants: {
    variant: {
      solid: {
	      ...
      },
      outline: {
        ...
      },
      light: {
        ...
      },
    },
    color: {
      ...
    },
    size: {
      ...
    },
    ...
  },
	compoundVariants: {
		...
	}
	...
}

// Button/index.tsx
const StyledButton = styled(ark.button, buttonRecipe)
```

### 컨벤션 - 컨테이너 앱에서

- `<Box/>`, `<Flex/>`, `<Grid/>` 등의 jsx 프리셋 유틸과 css property만을 사용해 레이아웃 제작에 집중

```tsx
import { Button, Text, Box, Stack, HStack } from '@nation-a/ui';
// import { Box, Stack, HStack } from '@nation-a/ui/jsx'; -> X (polymorphism이 구현 안되어있음)
import { ArrowRightIcon } from '@nation-a/icons'

// O: 프리셋 유틸을 활용해 가로 세로 빠른 레이아웃 작성
const MainPage = () => {
	return (
		<Stack as='main' gap={4} align={'center'}>
			<Button variant='solid'>Hello World</Button>
			<HStack gap={1}>
				<Box css={{ bg: 'surface.base' }}>
					<Text variant='title.md'>More</Text>
				</Box>
				<ArrowRightIcon />
			</HStack>
		</Stack>
	);
}

// X: 한 줄을 다 읽어야 레이아웃 방향을 알 수 있음
const MainPage = () => {
  return (
    <main
	    className={
		    css({
			    display: "flex",
			    flexDirection: "column",
			    alignItems: 'center',
			    gap: 4
			  })
			}>
      <Button variant='solid'>Hello World</Button>
      <div className={css({ display: "flex", alignItems: "center", gap: 1 })}>
        <div className={css({ bg: "surface.base", px: 2, py: 1, borderRadius: "sm" })}>
          <p className={css({ textStyle: 'title.md' })}>More</p>
        </div>
        <ArrowRightIcon />
      </div>
    </main>
  )
}
```

### Polymorphic Component의 구현

- 기본적으로 JSX 프리셋 (`<Box/>`, `<Flex/>`, `<Grid/>` 등) 들은 두가지 처리를 거쳐 export 됨
    - withPolymorphicComponent HOC로 래핑 → “as” prop이 추가됨
    - 내부 property들을 staticCSS로 전부 사전 빌드
- semantic 태그 사용시 as를 활용해 Polymorphism 구현 가능

```tsx
// withPolymorphicComponent HOC 인터페이스
function withPolymorphicComponent<
  ComponentType extends React.ComponentType<any>,
  DefaultTag extends ElementType = 'div',
  OwnProps = React.ComponentPropsWithoutRef<ComponentType>,
>(Component: ComponentType){...}

// 컴포넌트 정의
import { withPolymorphicComponent } from '@/utils/with-polymorphic-component'
import { Flex as FlexComponent } from '@styled-system/jsx'

export const Flex = withPolymorphicComponent<typeof FlexComponent, 'div'>(FlexComponent)

// 사용 케이스
<Flex as="main">Hello</Flex> // => <main class="flex_row">Hello</main>
```

### panda.config 적용

```tsx
import { preset } from '@nation-a/ui';
import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  preflight: false,
  syntax: 'object-literal',
  jsxFramework: 'react',

  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  exclude: [],
  
  // 디자인 시스템 내부의 styled-system 쓰도록 import
  importMap: '@nation-a/ui',
	
	// ui 내부 preset 설정
  presets: [preset],
  theme: {
    extend: {
      ... // 필요시 추가
    },
  },
  
  ...
});

```

### HeadUI와의 조합

<aside>
💡

**ArkUI는** 빠른 구현과 더불어, 직접 로직 구현시 발생 가능한 **엣지케이스들을 사전 방지**하기 위해 사용합니다.

</aside>

#### a) sva를 활용한 slot 기반 variant 구조화

- 내부 슬롯들을 동일한 variant내에 스타일링하기 위한 recipe 구조

```tsx
// Dialog/dialog.recipe.ts
import { dialogAnatomy } from '@ark-ui/react'
import { sva } from '@styled-system/css'

export type DialogVariantProps = keyof typeof dialogRecipe.variantMap

export const dialogRecipe = sva({
  className: 'dialog',
  slots: [...dialogAnatomy.keys(), 'header', 'footer', 'body'],
  base: {
    backdrop: {
      backdropFilter: 'blur(4px)',
      ...
    },
    positioner: {
      alignItems: 'center',
      ...
    },
    ...
  },
  variants: {
   ...
  }
});
```

#### b) createStyleContext 유틸을 통한 withContext HOC 활용법

- 내부 slot 컴포넌트들이 동일한 variant를 공유하기 위해 context로 묶어줌

```tsx
// Dialog/index.tsx
import { Dialog as ArkDialog } from '@ark-ui/react/dialog'
import { createStyleContext } from '@/utils/create-style-context'
import { dialogRecipe } from './dialog.recipe'
import { ark, Assign } from '@ark-ui/react'
import { ComponentProps } from 'react'
import { HTMLStyledProps } from '@styled-system/jsx'

const { withRootProvider, withContext } = createStyleContext(dialogRecipe)

export type DialogProps = ComponentProps<typeof Root>

type RootProps = Assign<HTMLStyledProps<'div'>, ArkDialog.RootProps>
const Root = withRootProvider<RootProps>(ArkDialog.Root)

type BackdropProps = Assign<HTMLStyledProps<'div'>, ArkDialog.BackdropBaseProps>
const Backdrop = withContext<HTMLDivElement, BackdropProps>(ArkDialog.Backdrop, 'backdrop')

type TriggerProps = Assign<HTMLStyledProps<'button'>, ArkDialog.TriggerBaseProps>
const Trigger = withContext<HTMLButtonElement, TriggerProps>(ArkDialog.Trigger, 'trigger')

...
```

## 기타

### 주의사항

- 모든 pandaCSS 유틸은 무조건 NDS에서만 import합니다.

```tsx
// 옳은 예
import { Box, BoxProps, HStack, Stack } from '@nation-a/ui';
import { css } from '@nation-a/ui/css';
import { type SystemStyleObject } from '@nation-a/ui/types';

// 틀린 예
import { Box, BoxProps, HStack, Stack } from '@nation-a/ui/jsx'; // 동작은 하나, as prop이 없음
import { css } from 'styled-system/css/css';
import { type SystemStyleObject } from '@pandacss/dev';
```

- `css()` 방식의 스타일링을 피하고, 하나의 컴포넌트에는 최대한 한가지의 스타일링 방식만을 사용합니다

```tsx
// 옳은 예
<Box css={{ bg:'red', color:'primary', height: '50px' }}>Hello</Box>

// 틀린 예
<styled.div
	css={{ bg:'red' }}
	className={css({ color:'primary'})}
	style={{ height: '50px' }}
>
	Hello
</Box>
```

- build-time-css 특성을 가지고 있기에, 동적 토큰 조합/할당을 지양합니다.

```tsx
// 옳은 예
<Box color={isActive ? "red.500" : "blue.500"}>
  Hello
</Box>

// 틀린 예 - 인식 못해서 스타일링이 안됨
const color = isActive ? "red" : "blue"

<Box color={`${color}.500`}> 
  Hello
</Box>
```

## 라이선스

이 프로젝트는 [MIT 라이선스](LICENSE)를 따릅니다.
