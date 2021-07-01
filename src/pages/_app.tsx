import { AnimateSharedLayout } from 'framer-motion';
import type { AppProps } from 'next/app'
import '../../public/styles/app.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimateSharedLayout>
      <Component {...pageProps} />
    </AnimateSharedLayout>
  )
}
export default MyApp
