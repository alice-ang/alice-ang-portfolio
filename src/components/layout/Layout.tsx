import * as React from 'react';

import { BackToTop } from '@/components/BackToTop';
import { DarkModeToggle } from '@/components/DarkModeToggle';
import { Footer } from '@/components/layout/Footer';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className='mx-auto flex max-w-6xl items-center justify-between border border-black bg-slate-100 p-3 dark:border-zinc-700/40 dark:bg-zinc-700 '>
        <div
          className='itemx-center
         flex'
        >
          <div className='h-3 w-3 rounded-full bg-red-500'></div>
          <div className='mx-2 h-3 w-3 rounded-full bg-yellow-500'></div>
          <div className='h-3 w-3 rounded-full bg-green-500'></div>
        </div>

        <div>
          <DarkModeToggle />
        </div>
      </div>
      <div className='mx-auto min-h-screen max-w-6xl border-x border-black bg-white shadow dark:border-zinc-700/40  dark:bg-zinc-800'>
        {children}
        <Footer />
      </div>
      <BackToTop />
    </>
  );
}
