import { SessionProvider } from 'next-auth/react'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'

function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default App
