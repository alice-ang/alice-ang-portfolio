import { AppProps } from 'next/app';

import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='overflow-clip'>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
