'use client';

import type { FC } from 'react';

import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';
import { useSwiper } from 'swiper/react';

type Props = {
  containerStyles: string;
  btnStyles: string;
};

const WorkSliderButtons: FC<Props> = ({ containerStyles, btnStyles }) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold />
      </button>

      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold />
      </button>
    </div>
  );
};

export default WorkSliderButtons;
