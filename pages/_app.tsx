// Core imports
import type { AppProps } from 'next/app';
import '../styles/globals.css';

// Library imports
import { SessionProvider } from 'next-auth/react';

// Components imports
import { Header } from '@components/common';
import { Footer } from '@components/common';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <div className='flex flex-col h-screen'>
        <Header />
        <main className='flex-grow'>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </SessionProvider>
  );
}

export default MyApp;
