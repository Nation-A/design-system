import { Dialog as ArkDialog } from '@ark-ui/react/dialog'
import { createStyleContext } from '@styled-system/jsx'
import { dialogRecipe, DialogVariantProps } from './dialog.recipe'
import { ark, Assign } from '@ark-ui/react'
import { ComponentProps } from 'react'
import { css, cx } from '@styled-system/css'
import { HTMLStyledProps } from '@styled-system/jsx'

const { withRootProvider, withContext } = createStyleContext(dialogRecipe)

const Root = withRootProvider(ArkDialog.Root) as React.ComponentType<
  Assign<ComponentProps<typeof ArkDialog.Root>, DialogVariantProps>
>

export type DialogProps = ComponentProps<typeof Root>

const Backdrop = withContext(ArkDialog.Backdrop, 'backdrop')

const Trigger = withContext(ArkDialog.Trigger, 'trigger')

const Content = withContext(ArkDialog.Content, 'content')

const Title = withContext(ArkDialog.Title, 'title')

const Description = withContext(ArkDialog.Description, 'description')

const Positioner = withContext(ArkDialog.Positioner, 'positioner')

const Header = withContext(ark.header, 'header')

const Footer = withContext(
  ({
    orientation = 'horizontal',
    className,
    ...props
  }: Assign<HTMLStyledProps<'footer'>, { orientation?: 'horizontal' | 'vertical' }>) => {
    return (
      <footer
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

const Body = withContext(ark.main, 'body')

const CloseTrigger = withContext(ArkDialog.CloseTrigger, 'closeTrigger')

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
