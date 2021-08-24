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
    const { event: { location, summary, description, start }} = this.props;
    return (
      <div className="event">
        <ul>
          <li className="location">{location}</li>
          <li className="summary">{summary}</li>
          <li className="date">{start.dateTime}</li>
          <li className="timezone">{start.timeZone}</li>
          {this.state.showMore === true && (
            <p className="description">{description}
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