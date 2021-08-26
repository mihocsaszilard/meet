import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  }

  inputValue = (event) => {
    const value = event.target.value;
    this.setState({
      numberOfEvents: value,
    });
    this.props.updateEventCount(event.target.value);
  };

  render() {
    return (
      <div className="number-of-events">
        <p>Number of events</p>
        <input 
          type="number"
          className="eventNumber"
          value={this.state.numberOfEvents}
          onChange={(e) => this.inputValue(e)}
        />
      </div>
    )
  }
}

export default NumberOfEvents;