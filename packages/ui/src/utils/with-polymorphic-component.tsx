import * as React from 'react'

type ElementType = React.ElementType

type AsProp<C extends ElementType> = {
  as?: C
}

type PropsWithAs<C extends ElementType, Props = {}> = AsProp<C> &
  Props &
  Omit<React.ComponentPropsWithoutRef<C>, keyof (AsProp<C> & Props)>

/**
 * 다형성 컴포넌트를 생성하는 유틸리티 함수 (ArkUI와는 사용시 충돌이 발생할 수 있음)
 * @param Component - 다형성 컴포넌트를 생성할 기본 컴포넌트 Ex) Button
 * @type {ComponentType} - 기본 컴포넌트의 타입 Ex) typeof Button
 * @type {DefaultTag} - 기본 태그 타입 Ex) 'div'
 * @type {OwnProps} - 컴포넌트의 속성 타입 Ex) ButtonProps
 * @returns as가 추가된 컴포넌트
 */
export function withPolymorphicComponent<
  ComponentType extends React.ComponentType<any>,
  DefaultTag extends ElementType = 'div',
  OwnProps = React.ComponentPropsWithoutRef<ComponentType>,
>(Component: ComponentType) {
  type ComponentProps = React.ComponentPropsWithoutRef<ComponentType>

  const PolymorphicComponent = React.forwardRef<React.ElementRef<DefaultTag>, PropsWithAs<DefaultTag, ComponentProps>>(
    (props, ref) => {
      const { as, ...restProps } = props as any
      return <Component as={as} ref={ref} {...restProps} />
    },
  )

  PolymorphicComponent.displayName = `withPolymorphic(${Component.displayName || 'Component'})`

  return PolymorphicComponent as <C extends ElementType = DefaultTag>(
    props: PropsWithAs<C, OwnProps> & { ref?: React.Ref<React.ElementRef<C>> },
  ) => React.ReactElement
}
