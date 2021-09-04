import React, { Component } from "react";
import { ErrorAlert } from "./Alert.jsx";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    errorText: '',
  }

  updateEventCount = (eventCount) => {
    if(eventCount < 1 || eventCount > 32) {
    return this.setState({
      numberOfEvents: 0,
      errorText: 'Please select a number between 1-32'
    });
  } else {
    this.setState({
      numberOfEvents: eventCount,
      errorText: ''
    });
  }
    this.props.updateEventCount(eventCount)
  };

  render() {
    return (
      <div className="number-of-events">
        <p className="resultNr">Number of results:</p>
        <input 
          type="number"
          className="eventNumber"
          value={this.props.numberOfEvents}
          onChange={(e) => this.updateEventCount(e.target.value)}
        />
        <ErrorAlert text={this.state.errorText} />
      </div>
    )
  }
}

export default NumberOfEvents;