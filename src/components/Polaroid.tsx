import Image from 'next/image';
import React from 'react';
import { IconType } from 'react-icons';

import classNames from '@/lib/classNames';
import { Mixpanel } from '@/lib/mixpanel';

type Pic = {
  url: string;
  alt: string;
  icon: IconType | null;
  link?: string;
};

type Props = {
  pic: Pic;
  isRotated: boolean;
};
export const Polaroid = ({ pic, isRotated }: Props) => {
  return (
    <a
      href={pic.link}
      target='_blank'
      onClick={() =>
        Mixpanel.track('visit_socials', {
          type: pic.alt,
          link: pic.link,
        })
      }
    >
      <div
        className={classNames(
          isRotated ? 'rotate-2' : '-rotate-2',
          'relative w-44 flex-none border border-black bg-white p-4 text-center shadow-lg dark:border-zinc-600 dark:bg-zinc-700 md:w-72'
        )}
      >
        <span className='absolute -top-5 text-3xl md:-top-7 md:text-4xl'>
          📍
        </span>
        <Image
          src={pic.url}
          alt={pic.alt}
          width='0'
          height='0'
          sizes='100vw'
          className=' h-auto w-full shadow'
        />
        <span className='flex items-center justify-end py-2 md:py-4'>
          {pic.icon && (
            <pic.icon
              size={22}
              className='text-palette-pink dark:text-palette-yellow mx-1'
              aria-hidden='true'
            />
          )}
        </span>
      </div>
    </a>
  );
};
