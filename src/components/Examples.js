import {connect} from 'react-redux'
import Clock from './Clock'
import Counter from './Counter'

function Examples ({ lastUpdate, light }) {
  return (
    <div>
      <Clock lastUpdate={lastUpdate} light={light} />
      <Counter />
    </div>
  )
}

function mapStateToProps (state) {
  const { lastUpdate, light } = state.counter
  return { lastUpdate, light }
}

export default connect(mapStateToProps)(Examples)