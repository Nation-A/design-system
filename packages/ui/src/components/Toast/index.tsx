'use client'
import { ark, Assign } from '@ark-ui/react'
import { Toast as ArkToast, Toaster } from '@ark-ui/react/toast'
import { toastRecipe } from './toast.recipe'
import type { ComponentProps, HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '@/utils/create-style-context'
import React from 'react'
const { withProvider, withContext } = createStyleContext(toastRecipe)

export type ToastProps = ComponentProps<typeof Root>

type ToastRecipeVariants = {
  width?: 'full' | 'fit'
  asLink?: boolean
}
type RootProps = Assign<HTMLStyledProps<'div'>, ArkToast.RootProps> & ToastRecipeVariants

const OriginalRoot = withProvider<HTMLDivElement, RootProps>(ArkToast.Root, 'root')

const Root = React.forwardRef<HTMLDivElement, RootProps>((props, ref) => {
  const { children, width, ...rest } = props

  const hasActionTrigger = React.Children.toArray(children).some((child) => {
    if (React.isValidElement(child)) {
      if (child.type === ActionTrigger) {
        return true
      }

      if (child.type === React.Fragment && child.props.children) {
        return React.Children.toArray(child.props.children).some(
          (fragmentChild) => React.isValidElement(fragmentChild) && fragmentChild.type === ActionTrigger,
        )
      }
    }
    return false
  })

  const widthValue = width !== undefined ? width : hasActionTrigger ? 'full' : 'fit'

  return (
    <OriginalRoot ref={ref} width={widthValue} {...rest}>
      {children}
    </OriginalRoot>
  )
})
Root.displayName = 'Toast.Root'

type ActionTriggerProps = Assign<HTMLStyledProps<'button'>, ArkToast.ActionTriggerProps> & {
  asLink?: boolean
  href?: string
}

// Custom ActionTrigger to support asLink prop
const OriginalActionTrigger = withContext<HTMLButtonElement, ActionTriggerProps>(
  ArkToast.ActionTrigger,
  'actionTrigger',
)
const OriginalActionTriggerAsLink = withContext<HTMLButtonElement, ActionTriggerProps>(ark.a, 'actionTrigger')

export const ActionTrigger = React.forwardRef<HTMLButtonElement, ActionTriggerProps>((props, ref) => {
  const { asLink, ...rest } = props
  return asLink ? <OriginalActionTriggerAsLink ref={ref} {...rest} /> : <OriginalActionTrigger ref={ref} {...rest} />
})
ActionTrigger.displayName = 'Toast.ActionTrigger'

export const Description = withContext<HTMLDivElement, Assign<HTMLStyledProps<'div'>, ArkToast.DescriptionProps>>(
  ArkToast.Description,
  'description',
)
export const Content = withContext<HTMLDivElement, HTMLStyledProps<'div'>>(ark.div, 'content')
export const Icon = withContext<HTMLDivElement, HTMLStyledProps<'div'>>(ark.div, 'icon')

export {
  ToastContext as Context,
  Toaster,
  createToaster,
  type ToastContextProps as ContextProps,
  type ToasterProps,
} from '@ark-ui/react/toast'

const Toast = {
  Root,
  ActionTrigger,
  Content,
  Description,
  Toaster,
  Icon,
}

export default Toast
