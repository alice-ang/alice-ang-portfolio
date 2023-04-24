import Image, { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

import classNames from '@/lib/classNames';

type Props = {
  src?: string | StaticImageData;
  className?: string;
  children?: ReactNode;
  onClose?: () => void;
};
export const Browser = ({ src, className, children, onClose }: Props) => {
  return (
    <div
      className={classNames(
        className,
        'overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10 dark:border-zinc-700/40 dark:bg-zinc-800'
      )}
    >
      <div className='flex items-center border-b bg-slate-50 p-4 dark:border-zinc-700/40 dark:bg-zinc-500'>
        <div
          className='mr-1 h-2 w-2 rounded-full bg-red-400 '
          onClick={onClose}
        />
        <div className='mr-1 h-2 w-2 rounded-full bg-yellow-400' />
        <div className='mr-1 h-2 w-2 rounded-full bg-green-400' />
      </div>
      {src && <Image className='w-full' src={src} alt='' />}
      {children && (
        <div className='px-4 pb-4 pt-5 text-left text-zinc-600 dark:text-zinc-400'>
          {children}
        </div>
      )}
    </div>
  );
};
