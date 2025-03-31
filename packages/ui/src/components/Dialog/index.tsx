'use client'
import { Dialog as ArkDialog } from '@ark-ui/react/dialog'
import { createStyleContext } from '@/utils/create-style-context'
import { dialogRecipe } from './dialog.recipe'
import { ark, Assign } from '@ark-ui/react'
import { ButtonHTMLAttributes, ComponentProps, HTMLAttributes } from 'react'
import { css, cx } from '@styled-system/css'

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

type HeaderProps = HTMLAttributes<HTMLDivElement>
const Header = withContext<HTMLDivElement, HeaderProps>(ark.header, 'header')

type FooterProps = Assign<HTMLAttributes<HTMLDivElement>, { orientation?: 'horizontal' | 'vertical' }>
const Footer = withContext<HTMLDivElement, FooterProps>(
  ({ orientation = 'horizontal', className, ...props }: FooterProps) => {
    return (
      <ark.footer
        className={cx(
          css({
            display: 'flex',
            flexDirection: orientation === 'horizontal' ? 'row' : 'column',
          }),
          className,
        )}
        {...props}
      />
    )
  },
  'footer',
)

type BodyProps = HTMLAttributes<HTMLDivElement>
const Body = withContext<HTMLDivElement, BodyProps>(ark.main, 'body')

type CloseTriggerProps = Assign<ButtonHTMLAttributes<HTMLButtonElement>, ArkDialog.CloseTriggerBaseProps>
const CloseTrigger = withContext<HTMLButtonElement, CloseTriggerProps>(ArkDialog.CloseTrigger, 'closeTrigger')

const Dialog = {
  Root,
  Backdrop,
  Trigger,
  Content,
  Title,
  Description,
  Positioner,
  Header,
  Footer,
  Body,
  CloseTrigger,
}

export default Dialog
