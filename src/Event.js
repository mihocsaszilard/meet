import React, { Component } from "react";

class Event extends Component {
  state = {
    showMore: false,
  }

Details = () => {
  this.setState((prevState) => ({
     showMore: !prevState.showMore
  }));
}


  render() {
    const event = this.props.event;
    return (
      <div className="event">
        <ul>
          <li className="location">{event.location}</li>
          <li className="summary">{event.summary}</li>
          <li className="date">{event.start.dateTime}</li>
          <li className="timezone">{event.start.timeZone}</li>
          {this.state.showMore === true && (
            <p className="description">{event.description}
              <button className="lessDetails" onClick={() => this.Details()}>Less details</button>   
            </p>
          )}
          {this.state.showMore === false && (
            <button className="moreDetails" onClick={() => this.Details()}>More details</button>
          )}
        </ul>
      </div>
    ) 
  }
}

export default Event;