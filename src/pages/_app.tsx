import { AppProps } from 'next/app';
import Head from 'next/head';

import { ModalContextProvider } from '../hooks/useModal';

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
    <Head>
      <title>TV Tupi</title>
    </Head>
    <ModalContextProvider >
      <Component {...pageProps} />
    </ModalContextProvider>
    </>
  )
}

export default MyApp
