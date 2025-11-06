import { PolymorphicComponentProps, withPolymorphicComponent } from '@/utils/with-polymorphic-component'
import {
  Box as BoxComponent,
  type BoxProps as BoxPropsType,
  Flex as FlexComponent,
  type FlexProps as FlexPropsType,
  Grid as GridComponent,
  type GridProps as GridPropsType,
  Stack as StackComponent,
  type StackProps as StackPropsType,
  VStack as VStackComponent,
  type VstackProps as VstackPropsType,
  HStack as HStackComponent,
  type HstackProps as HstackPropsType,
  GridItem as GridItemComponent,
  type GridItemProps as GridItemPropsType,
  Center as CenterComponent,
  type CenterProps as CenterPropsType,
} from '@styled-system/jsx'
import { ElementType } from 'react'

export const Box = withPolymorphicComponent<typeof BoxComponent, 'div'>(BoxComponent)
export const Flex = withPolymorphicComponent<typeof FlexComponent, 'div'>(FlexComponent)
export const Grid = withPolymorphicComponent<typeof GridComponent, 'div'>(GridComponent)
export const Stack = withPolymorphicComponent<typeof StackComponent, 'div'>(StackComponent)
export const VStack = withPolymorphicComponent<typeof VStackComponent, 'div'>(VStackComponent)
export const HStack = withPolymorphicComponent<typeof HStackComponent, 'div'>(HStackComponent)
export const GridItem = withPolymorphicComponent<typeof GridItemComponent, 'div'>(GridItemComponent)
export const Center = withPolymorphicComponent<typeof CenterComponent, 'div'>(CenterComponent)
export type BoxProps<T extends ElementType = 'div'> = PolymorphicComponentProps<T, BoxPropsType>
export type FlexProps<T extends ElementType = 'div'> = PolymorphicComponentProps<T, FlexPropsType>
export type GridProps<T extends ElementType = 'div'> = PolymorphicComponentProps<T, GridPropsType>
export type StackProps<T extends ElementType = 'div'> = PolymorphicComponentProps<T, StackPropsType>
export type VstackProps<T extends ElementType = 'div'> = PolymorphicComponentProps<T, VstackPropsType>
export type HstackProps<T extends ElementType = 'div'> = PolymorphicComponentProps<T, HstackPropsType>
export type GridItemProps<T extends ElementType = 'div'> = PolymorphicComponentProps<T, GridItemPropsType>
export type CenterProps<T extends ElementType = 'div'> = PolymorphicComponentProps<T, CenterPropsType>
