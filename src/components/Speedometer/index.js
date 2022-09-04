// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => {
      if (prevState.count === 200) {
        console.log(`Previous State value ${prevState.count}`)
        return {count: 200}
      }
      return {count: prevState.count + 10}
    })
  }

  onBrake = () => {
    this.setState(prevState => {
      if (prevState.count === 0) {
        console.log(`Previous State value ${prevState.count}`)
        return {count: 0}
      }
      return {count: prevState.count - 10}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image"
        />
        <h1 className="heading2">Speed is {count}mph</h1>
        <p className="paragraph">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="buttonsContainer">
          <button type="button" className="button1" onClick={this.onIncrement}>
            Accelerate
          </button>
          <button type="button" className="button2" onClick={this.onBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
