import { ReactNode, forwardRef, useEffect, useState } from 'react'
import { animated, SpringValue, useSpring } from '@react-spring/web'
import { css, cx } from '@nation-a/ui/css'
import useBottomSheet from '@/hooks/useBottomSheet'

const DEFAULT_MIN_SNAP = 0
const DEFAULT_MAX_SNAP = 'INNER_HEIGHT'
const DEFAULT_BACKDROP_OPACITY = 0.5

export interface BottomSheetProps {
  isOpen: boolean
  /**
   * onClose: 바텀시트 close시 callback
   */
  onClose?: () => void
  /**
   * onOpen: 바텀시트 open시 callback
   */
  onOpen?: () => void
  children: ReactNode
  className?: string
  /**
   * snapPercent: window 높이 기준 바텀시트 최소 / 최대 스냅 퍼센트 (default: min: DEFAULT_MIN_SNAP, max: DEFAULT_MIN_SNAP)
   */
  snapPercent?: { min?: number; max?: number }
  /**
   * bgBlocking: 바텀시트 열림시 배경 블락킹 여부 설정 (true(default), false)
   */
  bgBlocking?: boolean
  /**
   * backdropOpacity: 바텀시트 열림시 배경 블락킹 backdrop opacity 설정 (0 ~ 1 사이 소수 값, default: DEFAULT_BACKDROP_OPACITY)
   */
  backdropOpacity?: number
  /**
   * hideHandle: 바텀시트 핸들 숨기기 설정 (true, false(default))
   */
  hideHandle?: boolean
  /**
   * expendOnContentDrag: 컨텐츠 스크롤 시 바텀시트 드래깅 여부 설정 (true, false(default))
   */
  expendOnContentDrag?: boolean
}

interface BottomSheetFrameProps {
  children: ReactNode
  className: string
  initialOpenHeightPx: number
  springs: {
    transform: SpringValue<string>
  }
}

interface BottomSheetBackdropProps {
  onBackdropClick: () => void

  isBackdropOpen: boolean
  opacity: number
}

const BottomSheetFrame = forwardRef<HTMLDivElement, BottomSheetFrameProps>(
  ({ children, className, initialOpenHeightPx, springs }, ref) => {
    return (
      <animated.section
        ref={ref}
        className={cx(
          css({
            position: 'fixed',
            touchAction: 'pan-y',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            pointerEvents: 'auto', // 제스처 이벤트 허용
            overflow: 'hidden',
            borderRadius: '40px 40px 0 0',
            height: '100%',
            zIndex: 99999,
            backgroundColor: '#ffffff',
            shadow: '0 -15px 15px 0px rgba(0, 0, 0, 0.05)',
            willChange: 'auto',
          }),
          className,
        )}
        style={{
          bottom: `calc(${initialOpenHeightPx}px - 100dvh)`,
          transform: springs.transform,
        }}
      >
        {children}
      </animated.section>
    )
  },
)

const Backdrop = forwardRef<HTMLDivElement, BottomSheetBackdropProps>(
  ({ onBackdropClick, isBackdropOpen, opacity: bgOpacity }, ref) => {
    const [springs] = useSpring(
      () => ({
        from: { opacity: 0 },
        to: { opacity: isBackdropOpen ? 1 : 0 },
        config: {
          tension: 200,
          friction: 25,
          mass: 0.8,
        },
      }),
      [isBackdropOpen],
    )

    return (
      <animated.div
        className={css({
          zIndex: 99,
          position: 'fixed',
          top: 0,
          width: '100%',
          height: '100dvh',
          willChange: 'opacity',
          overflow: 'hidden',
          touchAction: 'none',
        })}
        style={{
          backgroundColor: springs.opacity.to((o: number) => `rgba(0, 0, 0, ${o * bgOpacity})`),
          opacity: springs.opacity,
          visibility: isBackdropOpen ? 'visible' : 'hidden',
        }}
        onClick={() => onBackdropClick()}
        ref={ref}
      />
    )
  },
)

const BottomSheetHandle = () => (
  <div
    className={css({
      margin: '22px auto',
      height: 1.5,
      minHeight: 1.5,
      width: '45px',
      borderRadius: 999,
      background: '#bebebe',
    })}
  />
)

const BottomSheet = (props: BottomSheetProps) => {
  const {
    isOpen = true,
    onClose,
    onOpen,
    children,
    className = '',
    snapPercent,
    bgBlocking = true,
    backdropOpacity = DEFAULT_BACKDROP_OPACITY,
    hideHandle = false,
    expendOnContentDrag = false,
  } = props

  const { bottomSheetRef, contentRef, snapToMin, springs } = useBottomSheet({
    isOpen,
    onOpen,
    onClose,
    snapPercent: {
      min: snapPercent?.min ?? DEFAULT_MIN_SNAP,
      max: snapPercent?.max ?? DEFAULT_MAX_SNAP,
    },
    expendOnContentDrag,
  })

  const [initialOpenHeightPx, setInitialOpenHeightPx] = useState(DEFAULT_MIN_SNAP)

  useEffect(() => {
    if (snapPercent?.min) setInitialOpenHeightPx(window.innerHeight * snapPercent?.min)
  }, [snapPercent?.min])

  return (
    <animated.div>
      {bgBlocking && <Backdrop isBackdropOpen={isOpen} opacity={backdropOpacity} onBackdropClick={() => snapToMin()} />}
      <BottomSheetFrame
        ref={bottomSheetRef}
        className={className}
        springs={springs}
        initialOpenHeightPx={initialOpenHeightPx}
      >
        {!hideHandle && <BottomSheetHandle />}
        <section ref={contentRef} className={css({ overflowY: 'auto' })}>
          {children}
        </section>
      </BottomSheetFrame>
    </animated.div>
  )
}

BottomSheetFrame.displayName = 'BottomSheetFrame'
Backdrop.displayName = 'Backdrop'

export default BottomSheet
