import * as React from 'react';

import { BackToTop } from '@/components/BackToTop';
import { Footer } from '@/components/layout/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className='bg-slate-50
    '
    >
      <div className='mx-auto min-h-screen max-w-6xl border-x border-black bg-white pt-8 shadow'>
        {children}
        <Footer />
      </div>
      <BackToTop />
    </div>
  );
}
