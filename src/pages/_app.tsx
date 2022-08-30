import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Dashboard Corporate</title>
        <meta name="description" content="Boilerplate" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#e6e6e6" />

        <link
          rel="icon"
          type="image/png"
          href="favicon/favicon-16x16.png"
          sizes="16x16"
        />
        <link
          rel="icon"
          type="image/png"
          href="favicon/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="favicon/favicon-128x128.png"
          sizes="128x128"
        />
        <link
          rel="apple-touch-icon"
          href="favicon/favicon-120x120.png"
          sizes="120x120"
        />
        <link
          rel="apple-touch-icon"
          href="favicon/favicon-180x180.png"
          sizes="180x180"
        />
        <link
          rel="apple-touch-icon"
          href="favicon/favicon-152x152.png"
          sizes="152x152"
        />
        <link
          rel="apple-touch-icon"
          href="favicon/favicon-167x167.png"
          sizes="167x167"
        />
        <link
          rel="apple-touch-icon"
          href="favicon/favicon-192x192.png"
          sizes="192x192"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
