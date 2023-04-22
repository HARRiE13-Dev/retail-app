import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
