import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 8,
  }

  updateEventCount = (eventCount) => {
    this.setState({
      numberOfEvents: eventCount
    });

    this.props.updateEventCount(eventCount)
  };

  render() {
    return (
      <div className="number-of-events">
        <p>Number of events</p>
        <input 
          type="number"
          className="eventNumber"
          value={this.props.numberOfEvents}
          onChange={(e) => this.updateEventCount(e.target.value)}
        />
      </div>
    )
  }
}

export default NumberOfEvents;