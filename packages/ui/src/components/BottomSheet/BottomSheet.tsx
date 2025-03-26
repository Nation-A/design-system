import useBottomSheet from '../../hooks/useBottomSheet';
import { css, Styles } from '../../../styled-system/css'
import { Dispatch, ReactNode, SetStateAction, forwardRef, useEffect, useState } from 'react';

const DEFAULT_MAX_OPEN_RATE = 80;
const DEFAULT_MIN_OPEN_RATE = 10;

type BgBlockMode = 'none' | 'transparent' | 'backdrop';

interface BottomSheetProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>

  // onClose: 바텀시트 close시 호출되는 콜백 함수
  onClose?: () => void;

  // onOpen: 바텀시트 open시 호출되는 콜백 함수
  onOpen?: () => void;
  children: ReactNode;
  className?: Styles;

  // snapPercent: 바텀시트 최소 / 최대 스냅 퍼센트 ({ min: number (default: DEFAULT_MIN_OPEN_RATE), max: number (default: DEFAULT_MAX_OPEN_RATE) })
  snapPercent?: { min: number, max: number }; 

  // bgBlockMode: 바텀시트 열림시 배경 블락킹 모드 설정 (none: 배경 블락 하지않음, transparent: Backdrop 없이 배경 블락, backdrop (default): Backdrop으로 배경 블락) 
  bgBlockMode?: BgBlockMode; 

  // hideHandle: 바텀시트 핸들 숨기기 설정 (true, false (default))
  hideHandle?: boolean;  // default: false
}


const BottomSheetHandle = () => <div className={css({ margin: '20px auto', height: 1.5, width: '45px', borderRadius: 999, background: '#bebebe' })} />


const Backdrop = ({ onBackdropClick, darkenBg }: { onBackdropClick: () => void, darkenBg: boolean }) => { 
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    setTimeout(() => setOpacity(darkenBg ? 1 : 0), 10);
  }, [darkenBg]);

  return (<div className={css({ zIndex: 99, position: 'fixed', top: 0, width: '100%', height: '100dvh', transition: 'opacity 0.2s ease-in' })} style={{ backgroundColor: opacity ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0)', opacity: opacity ? 1 : 0 }} onClick={() => onBackdropClick()} />)
}

const BottomSheetFrame = forwardRef<HTMLDivElement, { children: ReactNode, className: Styles, initialOpenHeightPx: number }>(({ children, className, initialOpenHeightPx }, ref) => {
  return (
    <section ref={ref}
      className={css({position: 'fixed',  display:'flex' , flexDirection:'column', padding: "0 30px", width: '100%', overflow: 'hidden', borderRadius:'40px 40px 0 0', transitionDuration: 'slower', transition: 'ease-out', height: '100%', zIndex: 999, backgroundColor: "#ffffff", shadow: '0 -15px 15px 0px rgba(0, 0, 0, 0.05)', ...className})}
      style={{bottom: `calc(${initialOpenHeightPx}px - 100dvh)`}}
    >
      {children} 
    </section>
  )}
);

const BottomSheet = ((props: BottomSheetProps) => {
  const { isOpen = true, setIsOpen, onClose, onOpen, children, className, snapPercent = {min: DEFAULT_MIN_OPEN_RATE, max: DEFAULT_MAX_OPEN_RATE}, bgBlockMode = 'backdrop', hideHandle } = props;

  const { bottomSheetRef, contentRef, snapToMax, snapToMin } = useBottomSheet({ setIsOpen, onOpen, onClose, snapPercent });
  
  const [initialOpenHeightPx, setInitialOpenHeightPx] = useState(10)
  
  useEffect(() => setInitialOpenHeightPx(window.innerHeight * snapPercent.min * 0.01), [snapPercent.min])

  useEffect(() => isOpen ? snapToMax() : snapToMin(), [isOpen])

  console.log("isOpen", isOpen)
  
  return (
      <> 
        {bgBlockMode !== 'none' && isOpen && <Backdrop darkenBg={bgBlockMode === 'backdrop' && isOpen} onBackdropClick={() => snapToMin()}/>}
        <BottomSheetFrame ref={bottomSheetRef} className={className} initialOpenHeightPx={initialOpenHeightPx}>
          {!hideHandle && <BottomSheetHandle />}
           {/* BottomSheet Inner */}
          <section ref={contentRef}>
            {children}
          </section>
          </BottomSheetFrame>
      </>
  );
});

BottomSheetFrame.displayName = 'BottomSheetFrame';



export default BottomSheet;




