import { Dispatch, SetStateAction, useEffect, useRef } from 'react';


interface BottomSheetHookProps { 
  onOpen: (() => void) | undefined
  onClose: (() => void) | undefined
  setIsOpen: Dispatch<SetStateAction<boolean>>

  // snapPercent - 바텀시트 최소 / 최대 스냅 퍼센트 ({ min: number (default: DEFAULT_MIN_OPEN_RATE), max: number (default: DEFAULT_MAX_OPEN_RATE) })
  snapPercent: {min: number, max: number}
}

// 바텀시트 Ref에 대한 Metrics
interface Metrics {
  initTouchPosition: number | null;
  initTransformValue: number;
  isContentAreaTouched: boolean;
  maxTransformValue: number;
  initialOpenHeightPx: number;
}

const SNAP_IMPLEMENT_THRESHOLD = 100;

const useBottomSheet = (props: BottomSheetHookProps) => {
  const { onOpen, onClose, setIsOpen, snapPercent } = props;
  
  const bottomSheetRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const metrics = useRef<Metrics>({
    initTouchPosition: null,
    initTransformValue: 0,
    isContentAreaTouched: false,
    maxTransformValue: 0,
    initialOpenHeightPx: 0
  });

    const snapToMax = () => { 
    if (!bottomSheetRef.current) {
      return;
    }
    const { maxTransformValue } = metrics.current;
    bottomSheetRef.current.style.transform = `translateY(${maxTransformValue}px)`;  
    setIsOpen(true)
    if(onOpen) onOpen();
  }

  const snapToMin = () => { 
    if (!bottomSheetRef.current) {
      return;
    }
    bottomSheetRef.current.style.transform = 'translateY(0px)';   
    setIsOpen(false)
    if(onClose) onClose()
  }



  const handleStart = (clientY: number) => {
    if (!bottomSheetRef.current) {
      return;
    }
    bottomSheetRef.current.style.transitionDuration = '0ms';

    const initTransformValue = Number(
      bottomSheetRef.current?.style.transform
        .replace('translateY(', '')
        .replace('px)', '') || 0,
    );
    metrics.current.initTransformValue = initTransformValue;
    metrics.current.initTouchPosition = clientY;
  };

  const handleMove = (clientY: number, e: Event) => {
    const { initTouchPosition, initTransformValue, isContentAreaTouched } =
      metrics.current;
    
    if (!initTouchPosition || !bottomSheetRef.current || isContentAreaTouched ) {
      return;
    }
 
    e.preventDefault();
    const currTouchPosition = clientY;
    const diff =
      (initTouchPosition - currTouchPosition) * -1 + initTransformValue;
    
    // 바텀시트의 translateY가 window.innerHeight 이상 넘어가는 것 방지
    if ((diff * -1 + metrics.current.initialOpenHeightPx) > window.innerHeight) return;

    bottomSheetRef.current.style.transform = `translateY(${diff}px)`;
  };

  const handleEnd = () => {
    const { initTouchPosition } = metrics.current;

    if (!initTouchPosition || !bottomSheetRef.current) {
      return;
    }

    const finalTransformValue = Number(
      bottomSheetRef.current.style.transform
        .replace('translateY(', '')
        .replace('px)', '') || 0,
    );
    bottomSheetRef.current.style.transitionDuration = '400ms';

    const initTransformValue = metrics.current.initTransformValue
    const transformedDistance = initTransformValue - finalTransformValue;

    if (Math.abs(transformedDistance) >= SNAP_IMPLEMENT_THRESHOLD) {
        // SNAP_IMPLEMENT_THRESHOLD 이상 이동한 경우 => TOP or BOTTOM으로 이동
        if(transformedDistance < 0){ 
          // 이동한 거리가 음수일 경우: 아래로 snap 한 경우 => Snap to BOTTOM
          snapToMin()
        } else {
            // 이동한 거리가 양수일 경우: 위로 snap 한 경우 => Snap to TOP
          snapToMax()
        }
    }else{
        // SNAP_IMPLEMENT_THRESHOLD 이하로 snap 했을 경우 => 원상 복귀
        bottomSheetRef.current.style.transform = `translateY(${initTransformValue}px)`;      
    }

    metrics.current.isContentAreaTouched = false;
    metrics.current.initTouchPosition = null;
  };

  const handleContentTouch = () => {
    metrics.current.isContentAreaTouched = true;
  };

  const handleTouch = {
    start: (e: TouchEvent) => handleStart(e.touches[0].clientY),
    move: (e: TouchEvent) => handleMove(e.touches[0].clientY, e),
    end: handleEnd,
  };

  const handleMouse = {
    down: (e: MouseEvent) => handleStart(e.clientY),
    move: (e: MouseEvent) => handleMove(e.clientY, e),
    up: handleEnd,
    leave: handleEnd,
  };

  useEffect(() => {
    metrics.current.initialOpenHeightPx = window.innerHeight * snapPercent.min * 0.01;
    metrics.current.maxTransformValue = (window.innerHeight - metrics.current.initialOpenHeightPx) * (snapPercent.max * 0.01) * -1; 

    const bottomSheetElement = bottomSheetRef.current;
    const contentElement = contentRef.current;
    bottomSheetElement?.addEventListener('touchstart', handleTouch.start);
    bottomSheetElement?.addEventListener('touchmove', handleTouch.move);
    bottomSheetElement?.addEventListener('touchend', handleTouch.end);

    bottomSheetElement?.addEventListener('mousedown', handleMouse.down);
    bottomSheetElement?.addEventListener('mousemove', handleMouse.move);
    bottomSheetElement?.addEventListener('mouseup', handleMouse.up);
    bottomSheetElement?.addEventListener('mouseleave', handleMouse.leave);

    contentElement?.addEventListener('touchstart', handleContentTouch);
    contentElement?.addEventListener('mousedown', handleContentTouch);

    return () => {
      bottomSheetElement?.removeEventListener('touchstart', handleTouch.start);
      bottomSheetElement?.removeEventListener('touchmove', handleTouch.move);
      bottomSheetElement?.removeEventListener('touchend', handleTouch.end);

      bottomSheetElement?.removeEventListener('mousedown', handleMouse.down);
      bottomSheetElement?.removeEventListener('mousemove', handleMouse.move);
      bottomSheetElement?.removeEventListener('mouseup', handleMouse.up);
      bottomSheetElement?.removeEventListener('mouseleave', handleMouse.leave);

      contentElement?.removeEventListener('touchstart', handleContentTouch);
      contentElement?.removeEventListener('mousedown', handleContentTouch);
    };
  }, []);

  return { bottomSheetRef, contentRef, snapToMax, snapToMin };
};

export default useBottomSheet;