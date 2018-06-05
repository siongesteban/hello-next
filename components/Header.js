import Router from 'next/router'
import NProgress from 'nprogress'
import { Link } from '../routes'

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <div>
    <Link route="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link route="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </div>
)

export default Header