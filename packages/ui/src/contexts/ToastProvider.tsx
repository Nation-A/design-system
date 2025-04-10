import { ReactNode, useEffect } from 'react'
import { createToaster, Toaster } from '@ark-ui/react/toast'
import Toast from '@/components/Toast'
import toast from '@/utils/toast'

const DURATION = {
  DEFAULT: 2500,
  HAS_ACTION: 5500,
}

/**
 * 토스트 UI 렌더링을 담당하는 컴포넌트
 * 앱의 루트 레벨(_app.tsx)에 배치 필수!
 */
export const ToastProvider = ({ children }: { children: ReactNode }) => {
  // toaster 생성
  const toaster = createToaster({
    placement: 'bottom',
    duration: DURATION.DEFAULT,
    offsets: {
      bottom: '55px',
      top: '0px',
      left: '0px',
      right: '0px',
    },
    overlap: true,
  })

  // 마운트 시 준비 상태 설정
  useEffect(() => {
    // Toast 유틸리티에 준비 상태 알림
    toast._setReady()

    // 컴포넌트 언마운트 시 처리
    return () => {
      // 정리 로직 필요 시 여기에 추가
    }
  }, [])

  // toast 큐 이벤트 리스너
  useEffect(() => {
    let currentZIndexCounter = 1300 // zIndex 카운터 초기화 (z-index: overlay == 1300)

    const showToasts = () => {
      const queuedToasts = toast._getQueue()
      queuedToasts.forEach((toastData) => {
        try {
          const options: any = {
            description: toastData.description,
            zIndex: currentZIndexCounter++, // 증가된 zIndex 값 사용
          }

          // data 속성 추가
          options.data = {
            icon: toastData.icon ? toastData.icon : null,
            asLink: toastData.asLink,
            zIndex: options.zIndex, // zIndex를 data에도 저장
          }

          // toast action label, onClick 함수 추가
          if (toastData.action) {
            options.action = {
              label: toastData.action.label,
              onClick:
                toastData.action.onClick ??
                (() => {
                  // No-op function when onClick is not provided
                }),
              duration: DURATION.HAS_ACTION,
            }
          }

          // custom duration 있는 경우 duration 새로 설정
          if (toastData.duration) {
            options.duration = toastData.duration
          }

          // 렌더링 사이클 외부에서 토스트 생성
          setTimeout(() => {
            toaster.create(options)
          }, 0)
        } catch (error) {
          console.error('Error creating toast:', error)
        }
      })
    }

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
          <Toast.Root
            key={toast.id}
            asLink={(toast as any).data?.asLink}
            style={{ zIndex: (toast as any).data?.zIndex || 1000 }}
          >
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
