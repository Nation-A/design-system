'use client'
import { Dialog as ArkDialog } from '@ark-ui/react/dialog'
import { ComponentProps } from '@styled-system/types'
import { createStyleContext } from '@/utils/create-style-context'
import { dialogRecipe } from './dialog.recipe'
import { Assign } from '@ark-ui/react'
import { ButtonHTMLAttributes, HTMLAttributes } from 'react'

const { withRootProvider, withContext } = createStyleContext(dialogRecipe)

export type DialogProps = ComponentProps<typeof Root>

type RootProps = ArkDialog.RootProps
const Root = withRootProvider<RootProps>(ArkDialog.Root)

type BackdropProps = Assign<HTMLAttributes<HTMLDivElement>, ArkDialog.BackdropBaseProps>
const Backdrop = withContext<HTMLDivElement, BackdropProps>(ArkDialog.Backdrop, 'backdrop')

type TriggerProps = Assign<ButtonHTMLAttributes<HTMLButtonElement>, ArkDialog.TriggerBaseProps>
const Trigger = withContext<HTMLButtonElement, TriggerProps>(ArkDialog.Trigger, 'trigger')

type ContentProps = Assign<HTMLAttributes<HTMLDivElement>, ArkDialog.ContentBaseProps>
const Content = withContext<HTMLDivElement, ContentProps>(ArkDialog.Content, 'content')

type TitleProps = Assign<HTMLAttributes<HTMLHeadingElement>, ArkDialog.TitleBaseProps>
const Title = withContext<HTMLHeadingElement, TitleProps>(ArkDialog.Title, 'title')

type DescriptionProps = Assign<HTMLAttributes<HTMLDivElement>, ArkDialog.DescriptionBaseProps>
const Description = withContext<HTMLDivElement, DescriptionProps>(ArkDialog.Description, 'description')

type PositionerProps = Assign<HTMLAttributes<HTMLDivElement>, ArkDialog.PositionerBaseProps>
const Positioner = withContext<HTMLDivElement, PositionerProps>(ArkDialog.Positioner, 'positioner')

const Dialog = {
  Root,
  Backdrop,
  Trigger,
  Content,
  Title,
  Description,
  Positioner,
}

export default Dialog
