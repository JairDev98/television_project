import { AppProps } from 'next/app';

import { ModalContextProvider } from '../hooks/useModal';

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
    <ModalContextProvider >
      <Component {...pageProps} />
    </ModalContextProvider>
    </>
  )
}

export default MyApp
