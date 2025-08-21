import { withPolymorphicComponent } from '@/utils/with-polymorphic-component'
import {
  Box as BoxComponent,
  type BoxProps,
  Flex as FlexComponent,
  type FlexProps,
  Grid as GridComponent,
  type GridProps,
  Stack as StackComponent,
  type StackProps,
  VStack as VStackComponent,
  type VstackProps,
  HStack as HStackComponent,
  type HstackProps,
  GridItem as GridItemComponent,
  type GridItemProps,
  Center as CenterComponent,
} from '@styled-system/jsx'

export type { BoxProps, FlexProps, GridProps, StackProps, VstackProps, HstackProps, GridItemProps }

export const Box = withPolymorphicComponent<typeof BoxComponent, 'div'>(BoxComponent)
export const Flex = withPolymorphicComponent<typeof FlexComponent, 'div'>(FlexComponent)
export const Grid = withPolymorphicComponent<typeof GridComponent, 'div'>(GridComponent)
export const Stack = withPolymorphicComponent<typeof StackComponent, 'div'>(StackComponent)
export const VStack = withPolymorphicComponent<typeof VStackComponent, 'div'>(VStackComponent)
export const HStack = withPolymorphicComponent<typeof HStackComponent, 'div'>(HStackComponent)
export const GridItem = withPolymorphicComponent<typeof GridItemComponent, 'div'>(GridItemComponent)
export const Center = withPolymorphicComponent<typeof CenterComponent, 'div'>(CenterComponent)
