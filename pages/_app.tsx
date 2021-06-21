import 'reflect-metadata'
import React from 'react'
import '../styles/globals.css'
import { Provider } from 'next-auth/client'

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps}>
      <Component {...pageProps} />
    </Provider>
  )
}
export default MyApp
