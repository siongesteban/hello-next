import Document, { Head, Main, NextScript } from 'next/document'
import style from '../styles/base.css'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <title>Siong Esteban</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" type="text/css" media="screen" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css" />
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body className={style.body}>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}