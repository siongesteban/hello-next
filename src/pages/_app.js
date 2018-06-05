import React from 'react'
import App, {Container} from 'next/app'
import Header from '../components/Header'
import '../styles/base.css'

const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
)

export default class MyApp extends App {
  render() {
    const {Component, pageProps} = this.props

    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    ) 
  }
}