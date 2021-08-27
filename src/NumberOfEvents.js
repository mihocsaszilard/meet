import React, { Component } from "react";

class NumberOfEvents extends Component {

  render() {
    return (
      <div className="number-of-events">
        <p>Number of events</p>
        <input 
          type="number"
          className="eventNumber"
          value={this.props.numberOfEvents}
          onChange={(e) => this.props.updateEventCount(e.target.value)}
        />
      </div>
    )
  }
}

export default NumberOfEvents;