import React from 'react'

type ToastData = {
  description: string
  action?: { label: string; onClick?: () => void }
  icon?: React.ReactNode
  asLink?: boolean
  href?: string
  duration?: number //ms
}

type ToastOptions = {
  icon?: React.ReactNode
  actionLabel?: string
  onActionClick?: () => void
  asLink?: boolean
  duration?: number //ms
}

/**
 * Toast 유틸리티
 * 실제 토스트 렌더링은 ToastProvider에서 담당
 */
const toast = {
  queue: [] as ToastData[],

  // ToastProvider에서 호출
  _getQueue: () => {
    const queue = [...toast.queue]
    toast.queue = []
    return queue
  },

  /**
   * ToastProvider가 준비되었는지 확인하는 상태
   */
  isReady: false,

  /**
   * 대기 중인 토스트 메시지 큐
   */
  pendingToasts: [] as Array<[string, ToastOptions | undefined]>,

  /**
   * ToastProvider에서 호출하여 준비 상태를 설정
   */
  _setReady: () => {
    toast.isReady = true

    // 대기 중인 토스트가 있으면 모두 표시
    if (toast.pendingToasts.length > 0) {
      toast.pendingToasts.forEach((args) => {
        toast.show(args[0], args[1])
      })
      toast.pendingToasts = []
    }
  },

  // render toast
  show: (message: string, options?: ToastOptions) => {
    // Provider가 준비되지 않은 경우 대기 큐에 추가
    if (!toast.isReady) {
      toast.pendingToasts.push([message, options])
      return
    }

    const toastData: ToastData = {
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
