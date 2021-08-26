import React, { Component } from "react";

class Event extends Component {
  state = {
    showMore: false,
    event: {},
  }

Details = () => {
  this.setState((prevState) => ({
     showMore: !prevState.showMore
  }));
}

convertDate(date) {
  const newDate = new Date(date).toString().slice(3, 21);
  return newDate;
}

timeFromDate(date) {
  const newDate = new Date(date).toString().slice(15, 21);
  return newDate;
}

  render() {
    const { event: { location, summary, description, start, end, htmlLink }} = this.props;
    return (
      <div className="event">
        <ul>
          <li className="location">{location}</li>
          <li className="summary">{summary}</li>
          <li className="date">
            {this.convertDate(start.dateTime) + ' -' + this.timeFromDate(end.dateTime)}
          </li>
          <li>{}</li>
          
          <li className="timezone">{start.timeZone} timezone</li>
          {this.state.showMore === true && (
            <p className="description">{description}
              <button className="lessDetails details-btn" onClick={() => this.Details()}>Less details</button>   
            </p>
          )}
          {this.state.showMore === false && (
            <button className="moreDetails details-btn" onClick={() => this.Details()}>More details</button>
          )}
          <a href={htmlLink} alt="attend event (redirects to google calendar)"><button className="attend-btn">Add to calendar</button></a>
        </ul>
      </div>
    ) 
  }
}

export default Event;