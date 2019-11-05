import React, { Component } from 'react'

export class App extends Component {

  state = {
    count: 0
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <div>
        <h1>Ứng dụng Counter sử dụng ReactJS</h1>
        <button onClick={this.increment}> + </button>
        <span> {this.state.count} </span>
        <button onClick={this.decrement}> - </button>
      </div>
    )
  }
}

export default App
