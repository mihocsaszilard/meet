import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 8,
  }

  inputValue = (event) => {
    const value = event.target.value;
    this.setState({
      numberOfEvents: value,
    })
  }

  render() {
    return (
      <div className="number-of-events">
        <input 
          type="number"
          className="eventNumber"
          value={this.state.numberOfEvents}
          onChange={this.inputValue}
        />
      </div>
    )
  }
}

export default NumberOfEvents;