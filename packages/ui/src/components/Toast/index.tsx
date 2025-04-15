'use client'
import { forwardRef, ReactNode } from 'react'
import { createPortal } from 'react-dom'
import hotToast, { Toaster as HotToaster } from 'react-hot-toast'
import { Box, HStack } from '@styled-system/jsx'
import { cx } from '@styled-system/css'
import { toastRecipe } from './toast.recipe'

// type ToastVariant = 'success' | 'error' | 'warning' | 'info'

const DEFAULT_DURATION = 3000 as const

interface ToastProps {
  description: string
  option?: {
    icon?: ReactNode
    actionLabel?: string
    onActionClick?: () => void
    duration?: number
    asLink?: boolean
    disableCloseOnActionClick?: boolean
  }
}

interface ToastComponent extends React.ForwardRefExoticComponent<ToastProps & React.RefAttributes<HTMLDivElement>> {
  Root: typeof Root
  Content: typeof Content
  Description: typeof Description
  Icon: typeof Icon
  ActionTrigger: typeof ActionTrigger
  Toaster: typeof Toaster
  show: (description: ToastProps['description'], option?: ToastProps['option']) => void
}

const Root = forwardRef<HTMLDivElement, { children: ReactNode; className?: string; width?: string }>(
  ({ children, className, width = 'fit', ...props }, ref) => {
    const styles = toastRecipe({ width: width as 'full' | 'fit' })
    return (
      <Box ref={ref} className={cx(styles.root, className)} {...props}>
        {children}
      </Box>
    )
  },
)

Root.displayName = 'Toast.Root'

const Content = forwardRef<HTMLDivElement, { children: ReactNode; className?: string }>(
  ({ children, className }, ref) => {
    const styles = toastRecipe()
    return (
      <HStack ref={ref} className={cx(styles.content, className)}>
        {children}
      </HStack>
    )
  },
)

Content.displayName = 'Toast.Content'

const Description = forwardRef<HTMLDivElement, { children: ReactNode; className?: string }>(
  ({ children, className }, ref) => {
    const styles = toastRecipe()
    return (
      <Box ref={ref} className={cx(styles.description, className)}>
        {children}
      </Box>
    )
  },
)

const Icon = forwardRef<HTMLDivElement, { icon?: ReactNode; className?: string }>(({ icon, className }, ref) => {
  const styles = toastRecipe()
  return (
    <Box ref={ref} className={cx(styles.icon, className)}>
      {icon}
    </Box>
  )
})

Icon.displayName = 'Toast.Icon'

const ActionTrigger = forwardRef<
  HTMLButtonElement | null,
  { onClick: () => void; children: ReactNode; className?: string; asLink?: boolean }
>(({ onClick, children, className, asLink = false }, ref) => {
  const styles = toastRecipe({ asLink })
  return (
    <button ref={ref} className={cx(styles.actionTrigger, className)} onClick={onClick}>
      {children}
    </button>
  )
})

ActionTrigger.displayName = 'Toast.ActionTrigger'

const Toaster = () => {
  return createPortal(
    <HotToaster
      position="bottom-center"
      toastOptions={{
        duration: DEFAULT_DURATION,
        style: {
          background: 'transparent',
          boxShadow: 'none',
          padding: 0,
          margin: 0,
        },
      }}
    />,
    document.body,
  )
}

Toaster.displayName = 'Toast.Toaster'

const Toast = forwardRef<HTMLDivElement, ToastProps>((props, ref) => {
  return <Box ref={ref} {...props} />
}) as ToastComponent

Toast.Root = Root
Toast.Content = Content
Toast.Description = Description
Toast.Icon = Icon
Toast.ActionTrigger = ActionTrigger
Toast.Toaster = Toaster

Toast.show = (description: ToastProps['description'], option: ToastProps['option']) => {
  hotToast(
    (t) => (
      <Toast.Root width={option?.actionLabel ? 'full' : 'fit'}>
        <Toast.Content>
          {option?.icon && <Toast.Icon icon={option?.icon} />}
          <Toast.Description>{description}</Toast.Description>
        </Toast.Content>
        {option?.actionLabel && (
          <Toast.ActionTrigger
            asLink={option?.asLink}
            onClick={() => {
              option?.onActionClick?.()
              if (!option?.disableCloseOnActionClick) {
                hotToast.dismiss(t.id)
              }
            }}
          >
            {option?.actionLabel}
          </Toast.ActionTrigger>
        )}
      </Toast.Root>
    ),
    {
      duration: option?.duration || DEFAULT_DURATION,
      position: 'bottom-center',
    },
  )
}

export { Toast }
