import React from 'react'

/**
 * Toast 유틸리티
 * 실제 토스트 렌더링은 ToastProvider에서 담당
 */
const toast = {
  queue: [] as Array<{
    description: string
    action?: { label: string; onClick?: () => void }
    icon?: React.ReactNode
    asLink?: boolean
    href?: string
    duration?: number //ms
  }>,

  // ToastProvider에서 호출
  _getQueue: () => {
    const queue = [...toast.queue]
    toast.queue = []
    return queue
  },

  // render toast
  show: (
    message: string,
    options?: {
      icon?: React.ReactNode
      actionLabel?: string
      onActionClick?: () => void
      asLink?: boolean
      duration?: number //ms
    },
  ) => {
    const toastData = {
      description: message,
      action: options?.actionLabel
        ? {
            label: options.actionLabel,
            onClick: options.onActionClick,
          }
        : undefined,
      icon: options?.icon,
      asLink: options?.asLink,
      duration: options?.duration,
    }

    // add to toast queue
    toast.queue.push(toastData)

    // ToastProvider에서 이벤트 감지
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('toast-queue-updated'))
    }
  },

  success: (message: string, options?: { icon?: React.ReactNode; duration?: number }) => {
    toast.show(message, { ...options })
  },

  error: (message: string, options?: { icon?: React.ReactNode; duration?: number }) => {
    toast.show(message, { ...options })
  },

  warning: (message: string, options?: { icon?: React.ReactNode; duration?: number }) => {
    toast.show(message, { ...options })
  },

  info: (message: string, options?: { icon?: React.ReactNode; duration?: number }) => {
    toast.show(message, { ...options })
  },
}

export default toast
