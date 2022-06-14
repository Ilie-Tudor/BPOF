import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useElrondNetworkSync } from '../hooks/auth/useElrondNetworkSync';

function MyApp({ Component, pageProps }: AppProps) {
  useElrondNetworkSync();
  return <Component {...pageProps} />
}

export default MyApp
