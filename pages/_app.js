import '@/styles/globals.css'
import { SessionProvider } from "Next-auth/react"
import store from '@/lib/store'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }) {
  return (
     <Provider store={store}>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
     </Provider> 
  )
}
