'use client'
import { ReactNode, useEffect } from 'react'
import { createToaster, Toaster } from '@ark-ui/react/toast'
import Toast from '@/components/Toast'
import toast from '@/utils/toast'

/**
 * 토스트 UI 렌더링을 담당하는 컴포넌트
 * 앱의 루트 레벨(_app.tsx)에 배치 필수!
 */
export const ToastProvider = ({ children }: { children: ReactNode }) => {
  // toaster 생성
  const toaster = createToaster({
    placement: 'bottom',
    duration: 3000,
    offsets: {
      bottom: '55px',
      top: '0px',
      left: '0px',
      right: '0px',
    },
  })

  // toast 큐 이벤트 리스너
  useEffect(() => {
    const showToasts = () => {
      const queuedToasts = toast._getQueue()
      queuedToasts.forEach((toastData) => {
        try {
          const options: any = {
            description: toastData.description,
          }

          // data 속성 추가
          options.data = { icon: toastData.icon ? toastData.icon : null, asLink: toastData.asLink }

          // toast duration 설정
          if (toastData.duration) {
            options.duration = toastData.duration
          }

          // toast action label, onClick 함수 추가
          if (toastData.action) {
            options.action = {
              label: toastData.action.label,
              onClick: toastData.action.onClick ?? (() => {}),
            }
          }

          toaster.create(options)
        } catch (error) {
          console.error('Error creating toast:', error)
        }
      })
    }

    // 초기 큐에 있는 토스트 표시
    showToasts()

    // 이벤트 리스너 등록
    const handleToastQueue = () => showToasts()
    window.addEventListener('toast-queue-updated', handleToastQueue)

    return () => {
      window.removeEventListener('toast-queue-updated', handleToastQueue)
    }
  }, [toaster])

  return (
    <>
      {children}
      <Toaster toaster={toaster}>
        {(toast) => (
          <Toast.Root key={toast.id} asLink={(toast as any).data?.asLink}>
            <Toast.Content>
              {(toast as any).data?.icon && <Toast.Icon>{(toast as any).data.icon}</Toast.Icon>}
              {toast.description && <Toast.Description>{toast.description}</Toast.Description>}
            </Toast.Content>
            {toast.action && (
              <Toast.ActionTrigger onClick={toast.action?.onClick}>{toast.action?.label}</Toast.ActionTrigger>
            )}
          </Toast.Root>
        )}
      </Toaster>
    </>
  )
}

export default ToastProvider
