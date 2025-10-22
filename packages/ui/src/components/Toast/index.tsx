'use client'
import { ReactNode } from 'react'
import hotToast, { DefaultToastOptions, Toaster as HotToaster, ToasterProps, ToastPosition } from 'react-hot-toast'
import { Box, HStack } from '@styled-system/jsx'
import { cx } from '@styled-system/css'
import { toastRecipe } from './toast.recipe'
import { CheckCircleFillIcon, CloseCircleFillIcon } from '@nation-a/icons'
import { useLanguage } from '../LanguageProvider'

// type ToastVariant = 'success' | 'error' | 'warning' | 'info'

const DEFAULT_DURATION = 3000 as const

export interface ToastProps {
  description: string
  option?: {
    icon?: ReactNode
    actionLabel?: string
    onActionClick?: () => void
    duration?: number
    asLink?: boolean
    disableCloseOnActionClick?: boolean
    position?: ToastPosition
  }
  ref?: React.Ref<HTMLDivElement>
}

interface ToastComponent {
  (props: ToastProps): React.ReactElement
  displayName?: string
  Root: typeof Root
  Content: typeof Content
  Description: typeof Description
  Icon: typeof Icon
  ActionTrigger: typeof ActionTrigger
  Toaster: typeof Toaster
  show: (description: ToastProps['description'], option?: ToastProps['option']) => void
  success: (description: ToastProps['description'], option?: ToastProps['option']) => void
  error: (description: ToastProps['description'], option?: ToastProps['option']) => void
}

const Root = ({
  children,
  className,
  width = 'fit',
  ref,
  ...props
}: {
  children: ReactNode
  className?: string
  width?: string
  ref?: React.Ref<HTMLDivElement>
}) => {
  const styles = toastRecipe({ width: width as 'full' | 'fit' })
  return (
    <Box ref={ref} className={cx(styles.root, className)} {...props}>
      {children}
    </Box>
  )
}

Root.displayName = 'Toast.Root'

const Content = ({
  children,
  className,
  ref,
}: {
  children: ReactNode
  className?: string
  ref?: React.Ref<HTMLDivElement>
}) => {
  const styles = toastRecipe()
  return (
    <HStack ref={ref} className={cx(styles.content, className)}>
      {children}
    </HStack>
  )
}

Content.displayName = 'Toast.Content'

const Description = ({
  children,
  className,
  ref,
}: {
  children: ReactNode
  className?: string
  ref?: React.Ref<HTMLDivElement>
}) => {
  const { language } = useLanguage()
  const styles = toastRecipe({ language })
  return (
    <Box ref={ref} className={cx(styles.description, className)}>
      {children}
    </Box>
  )
}

Description.displayName = 'Toast.Description'

const Icon = ({ icon, className, ref }: { icon?: ReactNode; className?: string; ref?: React.Ref<HTMLDivElement> }) => {
  const styles = toastRecipe()
  return (
    <Box ref={ref} className={cx(styles.icon, className)}>
      {icon}
    </Box>
  )
}

Icon.displayName = 'Toast.Icon'

const ActionTrigger = ({
  onClick,
  children,
  className,
  asLink = false,
  ref,
}: {
  onClick: () => void
  children: ReactNode
  className?: string
  asLink?: boolean
  ref?: React.Ref<HTMLButtonElement>
}) => {
  const { language } = useLanguage()
  const styles = toastRecipe({ asLink, language })
  return (
    <button ref={ref} className={cx(styles.actionTrigger, className)} onClick={onClick}>
      {children}
    </button>
  )
}

ActionTrigger.displayName = 'Toast.ActionTrigger'

const Toaster = ({ toastOptions, ...props }: { toastOptions?: DefaultToastOptions } & ToasterProps) => {
  return (
    <HotToaster
      position="bottom-center"
      toastOptions={{
        duration: DEFAULT_DURATION,
        style: {
          background: 'transparent',
          boxShadow: 'none',
          padding: 0,
          margin: 0,
          width: 'fit-content',
        },
        ...toastOptions,
      }}
      {...props}
    />
  )
}

Toaster.displayName = 'Toast.Toaster'

const Toast = ((props: ToastProps) => {
  const { ref, ...rest } = props
  return <Box ref={ref} {...rest} />
}) as ToastComponent

Toast.displayName = 'Toast'

Toast.Root = Root
Toast.Content = Content
Toast.Description = Description
Toast.Icon = Icon
Toast.ActionTrigger = ActionTrigger
Toast.Toaster = Toaster

const showToast = (description: ToastProps['description'], option?: ToastProps['option']) => {
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
      position: option?.position || 'bottom-center',
    },
  )
}

// 기본 Info Toast Show
Toast.show = showToast

// Success Toast Show
Toast.success = (description: ToastProps['description'], option?: Omit<ToastProps['option'], 'icon'>) => {
  return showToast(description, { ...option, icon: <CheckCircleFillIcon /> })
}

// Error Toast Show
Toast.error = (description: ToastProps['description'], option?: ToastProps['option']) => {
  console.error('error', description)
  return showToast(description, { ...option, icon: <CloseCircleFillIcon /> })
}

export default Toast
