import * as React from 'react'

type ElementType = React.ElementType

type AsProp<C extends ElementType> = {
  as?: C
}

type PropsWithAs<C extends ElementType, Props = Record<string, unknown>> = AsProp<C> &
  Omit<Props, keyof AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof Props | keyof AsProp<C>>

export type PolymorphicComponentProps<C extends ElementType, Props = Record<string, unknown>> = PropsWithAs<
  C,
  Props
> & {
  ref?: React.ComponentPropsWithRef<C>['ref']
}

/**
 * 다형성 컴포넌트를 생성하는 유틸리티 함수 (ArkUI와는 사용시 충돌이 발생할 수 있음)
 * @param Component - 다형성 컴포넌트를 생성할 기본 컴포넌트 Ex) Button
 * @type {ComponentType} - 기본 컴포넌트의 타입 Ex) typeof Button
 * @type {DefaultTag} - 기본 태그 타입 Ex) 'div'
 * @type {OwnProps} - 컴포넌트의 속성 타입 Ex) ButtonProps
 * @returns as가 추가된 컴포넌트
 */
export function withPolymorphicComponent<
  ComponentType extends React.ComponentType<Record<string, unknown>>,
  DefaultTag extends ElementType = 'div',
>(Component: ComponentType) {
  type BaseProps = Omit<React.ComponentPropsWithoutRef<ComponentType>, 'as'>

  const PolymorphicComponent = React.forwardRef<unknown, PropsWithAs<DefaultTag, BaseProps>>((props, ref) => {
    return React.createElement(Component, { ...props, ref } as unknown as React.ComponentProps<ComponentType> &
      React.Attributes)
  })

  PolymorphicComponent.displayName = `withPolymorphic(${Component.displayName || 'Component'})`

  return PolymorphicComponent as unknown as <C extends ElementType = DefaultTag>(
    props: PolymorphicComponentProps<C, BaseProps>,
  ) => React.ReactElement
}
