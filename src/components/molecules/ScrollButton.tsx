import React, { useRef, useEffect } from 'react';
import { Button, ButtonProps } from '../atoms/Button';
import { Plus } from '../icons';

export interface ScrollButtonProps {
  onClick?: () => void;
  isEverythingVisible: boolean;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ onClick, isEverythingVisible }) => {
  const container = useRef<HTMLDivElement>(null)
  
  const buttonProps: ButtonProps = {
    label: 'More images',
    icon: <Plus />,
    variant: 'default',
    type: "special",
    onClick: onClick || (() => {}),
  };
  
  useEffect(() => {
    if (isEverythingVisible === true) {
      container.current?.classList.add("translate-y-[100%]");
      setTimeout(() => {
        container.current?.classList.add("translate-y-[300%]")
      }, 100);
    }
  }, [isEverythingVisible]);
  

  return (
    <div
      ref={container}
      className={`
        absolute left-0 right-0 bottom-0 m-auto
        flex items-center justify-center leading-none font-medium
        scroll-button-bg transition-all duration-1000
        h-[110px] z-30
      `}
    >
      <Button {...buttonProps} />
    </div>
  );
};

export default ScrollButton;
