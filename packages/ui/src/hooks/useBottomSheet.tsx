import { useEffect, useRef } from 'react'
import { useSpring } from '@react-spring/web'

interface BottomSheetHookProps {
  isOpen: boolean
  onOpen: (() => void) | undefined
  onClose: (() => void) | undefined

  // snapPercent - 바텀시트 최소 / 최대 스냅 퍼센트 ({ min: number (default: DEFAULT_MIN_OPEN_RATE), max: number (default: DEFAULT_MAX_OPEN_RATE) })
  snapPercent: { min: number; max: number | 'INNER_HEIGHT' }
  expendOnContentDrag: boolean
}

// 바텀시트 Ref에 대한 Metrics
interface Metrics {
  initTouchPosition: number | null
  initTransformValue: number
  maxTransformValue: number
  initialOpenHeightPx: number
  canDragRef: boolean
  isBottomSheetOpen: boolean
}

const SNAP_TO_MAX_THRESHOLD = 5
const SNAP_TO_MIN_THRESHOLD = 100
const BOTTOM_SHEET_HANDLE_HEIGHT = 45
const INTERACTIVE_ELEMENTS = 'input, button, a, textarea, select, label, [role="button"], [onClick]'

const SPRING_CONFIG = {
  up: {
    tension: 80, // 튕기기
    friction: 10, // 묵직함
    mass: 0.1,
    velocity: 0,
  },
  down: {
    tension: 70,
    friction: 10,
    mass: 0.1,
    velocity: 0,
  },
  moving: {
    tension: 600,
    friction: 30,
    mass: 0.1,
    velocity: 0.1,
  },
}
const useBottomSheet = (props: BottomSheetHookProps) => {
  const { isOpen, onOpen, onClose, snapPercent, expendOnContentDrag } = props

  const bottomSheetRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const metrics = useRef<Metrics>({
    initTouchPosition: null,
    initTransformValue: 0,
    canDragRef: true,
    maxTransformValue: 0,
    initialOpenHeightPx: 0,
    isBottomSheetOpen: false,
  })

  const [springs, api] = useSpring(() => ({
    transform: 'translateY(0px)',
    config: SPRING_CONFIG.down,
  }))

  const snapToMax = () => {
    const { maxTransformValue } = metrics.current
    console.log('maxTransformValue', maxTransformValue)
    api.start({
      transform: `translateY(${maxTransformValue}px)`,
      config: SPRING_CONFIG.up,
    })
    if (onOpen && !metrics.current.isBottomSheetOpen) onOpen()
    metrics.current.isBottomSheetOpen = true
  }

  const snapToMin = () => {
    api.start({
      transform: 'translateY(0px)',
      config: SPRING_CONFIG.down,
    })
    if (onClose && metrics.current.isBottomSheetOpen) onClose()
    metrics.current.isBottomSheetOpen = false
  }

  const handleContentTouch = (e: Event) => {
    const target = e.target as HTMLElement

    // 인터랙티브 요소 => expendOnContentDrag 방지 (터치 이벤트 블락 X)
    if ((!target.matches(INTERACTIVE_ELEMENTS) && expendOnContentDrag) || !metrics.current.isBottomSheetOpen) {
      metrics.current.canDragRef = true // content 드래그 허용
    } else {
      metrics.current.canDragRef = false
    }
  }

  const handleStart = (clientY: number, e: Event) => {
    if (!bottomSheetRef.current) {
      return
    }

    const contentElement = contentRef.current
    const target = e.target as HTMLElement

    // 인터랙티브 요소인 경우 => contentDrag 방지, 인터렉티브 가능하게 설정
    if (contentElement?.scrollTop !== 0 && target.matches(INTERACTIVE_ELEMENTS)) {
      return // contentDrag 방지
    }

    const currentTransform = springs.transform.get()
    const initTransformValue = Number(currentTransform.replace('translateY(', '').replace('px)', '') || 0)
    metrics.current.initTransformValue = initTransformValue
    metrics.current.initTouchPosition = clientY
  }

  const handleMove = (clientY: number, e: Event) => {
    const { initTouchPosition, initTransformValue, canDragRef, initialOpenHeightPx } = metrics.current

    if (!initTouchPosition || !bottomSheetRef.current) return

    const currTouchPosition = clientY

    const yDiff = (initTouchPosition - currTouchPosition) * -1 + initTransformValue

    const isMovingDown = initTransformValue < yDiff

    // 드래그 허용하지 않는 ref여도 스크롤이 맨 위에 위치해있고 아래로 스크롤 내리는 경우라면 바텀시트 드래깅 허용
    if (!canDragRef && !(isMovingDown && contentRef.current?.scrollTop === 0)) return

    e.preventDefault() // 스크롤 및 터치 방지

    const currTopYOffset = yDiff * -1 + initialOpenHeightPx

    // 최대 translateY 설정 -> 바텀시트의 translateY가 window.innerHeight 이상 넘어가는 것 방지
    const translateYOffset = window.innerHeight < currTopYOffset ? window.innerHeight * -1 + initialOpenHeightPx : yDiff

    api.start({
      transform: `translateY(${translateYOffset}px)`,
      config: SPRING_CONFIG.moving,
    })
  }

  const handleEnd = () => {
    const { initTouchPosition, initTransformValue } = metrics.current

    if (!initTouchPosition || !bottomSheetRef.current) {
      return
    }

    const currentTransform = springs.transform.get()
    const finalTransformValue = Number(currentTransform.replace('translateY(', '').replace('px)', '') || 0)

    // 이동한 거리(transformedDistance)가 음수 => 아래로 이동, 양수 => 위로 이동
    const transformedDistance = initTransformValue - finalTransformValue

    if (transformedDistance < 0 && SNAP_TO_MIN_THRESHOLD < Math.abs(transformedDistance)) {
      snapToMin()
    } else if (transformedDistance > 0 && SNAP_TO_MAX_THRESHOLD < Math.abs(transformedDistance)) {
      snapToMax()
    } else {
      // 원래 위치로 돌아갈 때도 방향에 따라 다른 tension 적용
      const isMovingUp = finalTransformValue > initTransformValue
      api.start({
        transform: `translateY(${initTransformValue}px)`,
        config: isMovingUp ? SPRING_CONFIG.up : SPRING_CONFIG.down,
      })
    }

    metrics.current.canDragRef = true
    metrics.current.initTouchPosition = null
  }

  const handleTouch = {
    start: (e: TouchEvent) => handleStart(e.touches[0].clientY, e),
    move: (e: TouchEvent) => handleMove(e.touches[0].clientY, e),
    end: handleEnd,
  }

  const handleMouse = {
    down: (e: MouseEvent) => handleStart(e.clientY, e),
    move: (e: MouseEvent) => handleMove(e.clientY, e),
    up: handleEnd,
    leave: handleEnd,
  }

  // 바텀시트가 열려있을 때 backdrop에서의 스크롤 이벤트를 완전히 차단
  const preventScrollOnBackdrop = (e: Event) => {
    // 바텀시트 영역 내부의 이벤트는 허용
    if (
      bottomSheetRef.current &&
      (bottomSheetRef.current.contains(e.target as Node) ||
        // 최소 높이로 떠 있는 바텀시트의 핸들 영역을 클릭하는 경우 특별 처리
        (e instanceof TouchEvent && isBottomSheetHandleArea(e.touches[0].clientY)))
    ) {
      return
    }

    // 바텀시트 외부 영역에서는 이벤트 차단
    e.preventDefault()
    e.stopPropagation()
  }

  // 터치 포인트가 바텀시트 핸들 영역인지 확인하는 함수
  const isBottomSheetHandleArea = (clientY: number): boolean => {
    if (!bottomSheetRef.current) return false

    const { initialOpenHeightPx } = metrics.current
    const bottomSheetTop = window.innerHeight - initialOpenHeightPx

    // 핸들 영역: 바텀시트 상단부터 BOTTOM_SHEET_HANDLE_HEIGHT만큼
    const handleAreaTop = bottomSheetTop
    const handleAreaBottom = bottomSheetTop + BOTTOM_SHEET_HANDLE_HEIGHT

    return clientY >= handleAreaTop && clientY <= handleAreaBottom
  }

  // 터치 시작 이벤트를 위한 특별 핸들러
  const handleTouchStart = (e: TouchEvent) => {
    const clientY = e.touches[0].clientY

    // 핸들 영역 터치인 경우, 배경 스크롤을 막고 바텀시트 드래그 시작
    if (isBottomSheetHandleArea(clientY)) {
      e.preventDefault()
      e.stopPropagation()
      handleTouch.start(e)
    }
  }

  useEffect(() => {
    // 외부 isOpen 값과 bottomSheet snap 높이 동기화
    if (isOpen) snapToMax()
    else snapToMin()

    if (isOpen) {
      // 모든 스크롤 관련 이벤트 차단
      document.addEventListener('touchmove', preventScrollOnBackdrop, { passive: false })
      document.addEventListener('wheel', preventScrollOnBackdrop, { passive: false })
      document.addEventListener('mousewheel', preventScrollOnBackdrop, { passive: false })

      // 핸들 영역 터치를 위한 추가 이벤트 리스너
      document.addEventListener('touchstart', handleTouchStart, { passive: false })

      // body 스크롤 차단
      document.body.style.overflow = 'hidden'
      document.body.style.touchAction = 'none'
    } else {
      document.removeEventListener('touchmove', preventScrollOnBackdrop)
      document.removeEventListener('wheel', preventScrollOnBackdrop)
      document.removeEventListener('mousewheel', preventScrollOnBackdrop)
      document.removeEventListener('touchstart', handleTouchStart)

      // body 스크롤 복원
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }

    return () => {
      document.removeEventListener('touchmove', preventScrollOnBackdrop)
      document.removeEventListener('wheel', preventScrollOnBackdrop)
      document.removeEventListener('mousewheel', preventScrollOnBackdrop)
      document.removeEventListener('touchstart', handleTouchStart)

      // 컴포넌트 언마운트 시 body 스타일 복원
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }
  }, [isOpen])

  useEffect(() => {
    const bottomSheetElement = bottomSheetRef.current
    const contentElement = contentRef.current

    metrics.current.initialOpenHeightPx = window.innerHeight * (snapPercent.min > 1 ? 1 : snapPercent.min)
    if (snapPercent.max === 'INNER_HEIGHT' && contentElement) {
      metrics.current.maxTransformValue = (contentElement.clientHeight + BOTTOM_SHEET_HANDLE_HEIGHT) * -1
    } else if (typeof snapPercent.max === 'number') {
      metrics.current.maxTransformValue =
        (window.innerHeight - metrics.current.initialOpenHeightPx) * (snapPercent.max > 1 ? 1 : snapPercent.max) * -1
    }

    bottomSheetElement?.addEventListener('touchstart', handleTouch.start)
    bottomSheetElement?.addEventListener('touchmove', handleTouch.move)
    bottomSheetElement?.addEventListener('touchend', handleTouch.end)

    bottomSheetElement?.addEventListener('mousedown', handleMouse.down)
    bottomSheetElement?.addEventListener('mousemove', handleMouse.move)
    bottomSheetElement?.addEventListener('mouseup', handleMouse.up)
    bottomSheetElement?.addEventListener('mouseleave', handleMouse.leave)

    contentElement?.addEventListener('touchstart', handleContentTouch)
    contentElement?.addEventListener('mousedown', handleContentTouch)

    return () => {
      bottomSheetElement?.removeEventListener('touchstart', handleTouch.start)
      bottomSheetElement?.removeEventListener('touchmove', handleTouch.move)
      bottomSheetElement?.removeEventListener('touchend', handleTouch.end)

      bottomSheetElement?.removeEventListener('mousedown', handleMouse.down)
      bottomSheetElement?.removeEventListener('mousemove', handleMouse.move)
      bottomSheetElement?.removeEventListener('mouseup', handleMouse.up)
      bottomSheetElement?.removeEventListener('mouseleave', handleMouse.leave)

      contentElement?.removeEventListener('touchstart', handleContentTouch)
      contentElement?.removeEventListener('mousedown', handleContentTouch)
    }
  }, [])

  return { bottomSheetRef, contentRef, snapToMax, snapToMin, springs }
}

export default useBottomSheet
