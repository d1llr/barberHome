import Layout from '@/components/layout/layoutWrapper/Layout'
import { store, wrapper } from '@/redux/store'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

function App({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Provider>
}

export default wrapper.withRedux(App)

