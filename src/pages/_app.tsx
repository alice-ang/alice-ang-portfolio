import { AppProps } from 'next/app';
import { useEffect } from 'react';

import '@/styles/globals.css';

import { Mixpanel } from '@/lib/mixpanel';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      Mixpanel.track('page_visit');
    }
  }, []);

  return (
    <div className='overflow-clip'>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
