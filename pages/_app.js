import '@/styles/globals.css'
import {SessionProvider} from 'Next-auth/react'
export default function App({ Component, pageProps }) {


  return( <SessionProvider session={pageProps.session}>
     <Component {...pageProps} />
     </SessionProvider>
    )
}

