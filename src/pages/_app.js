import React from 'react'
import App, {Container} from 'next/app'
import { Provider } from 'react-redux'
import Header from '../components/Header'
import withReduxStore from '../hocs/withReduxStore'
import '../styles/base.css'

const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
)

class MyApp extends App {
  render() {
    const { Component, pageProps, store } = this.props

    return (
      <Container>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </Container>
    ) 
  }
}

export default withReduxStore(MyApp)