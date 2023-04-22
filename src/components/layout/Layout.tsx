import * as React from 'react';

import { Footer } from '@/components/layout/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className='bg-zinc-50
    '
    >
      <div className='mx-auto min-h-screen max-w-7xl border-x border-black bg-white shadow'>
        {children}
        <Footer />
      </div>
    </div>
  );
}
