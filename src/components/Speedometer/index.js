// Write your code here

import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
    this.state = {count: 0}

    this.applyBreak = () => {
        const {count} = this.state

        if (count > 0) {
            this.setState({prevState => ({count: prevState.count - 10})})
        }
    }

    this.onIncrement = () => {
        const {count} = this.state
        
        if (count < 200) {
            this.setState ({prevState => ({count: prevState.count + 10})})
        }
    }

    
  render() {
      const {count} = this.state

    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img src = "https://assets.ccbp.in/frontend/react-js/speedometer-img.png" className = "image" alt = "Speedometer"/>
        <h1 className="speed">Speed is {count} mph</h1>
        <p>Min Limit 0mph, Max Limit is 200mph</p>
        <div>
          <button type = "button" className="primary-btn" onClick={this.onIncrement}>
            Accelerator
          </button>
          <button type = "button" className="btn" onClick={this.applyBreak}>
            Apply break
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
