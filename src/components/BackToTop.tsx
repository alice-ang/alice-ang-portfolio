import React, { useEffect, useState } from 'react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

import classNames from '@/lib/classNames';
import { Mixpanel } from '@/lib/mixpanel';

export const BackToTop = () => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.pageYOffset > 300 ? setIsShown(true) : setIsShown(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={classNames(
        isShown ? 'fixed' : 'hidden',
        ' bg-palette-yellow duration-350  bottom-6 right-6 max-w-fit animate-bounce cursor-pointer items-center justify-center rounded-full border border-black p-4 shadow transition ease-in-out'
      )}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        Mixpanel.track('back_to_top');
      }}
    >
      <BsFillArrowUpCircleFill size={20} className='text-black' />
    </div>
  );
};
