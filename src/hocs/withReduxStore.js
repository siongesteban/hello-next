import App, { Container } from 'next/app'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'

const isServer = typeof window === 'undefined'
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__'

const getOrCreateStore = (initialState) => {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return configureStore(initialState)
  }

  // Store in global variable if client
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = configureStore(initialState)
  }
  
  return window[__NEXT_REDUX_STORE__]
}

export default (App) => {
  return class Redux extends React.Component {
    static async getInitialProps (appContext) {
      const store = getOrCreateStore()

      // Provide the store to getInitialProps of pages
      appContext.ctx.store = store

      let appProps = {}

      if (App.getInitialProps) {
        appProps = await App.getInitialProps(appContext)
      }

      return {
        ...appProps,
        initialState: store.getState()
      }
    }

    constructor(props) {
      super(props)
      this.store = getOrCreateStore(props.initialState)
    }

    render() {
      return <App {...this.props} store={this.store} />
    }
  }
}