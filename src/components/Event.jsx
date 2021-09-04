import React, { Component } from "react";
import Modal from "./modal.jsx";

class Event extends Component {
  state = {
    event: {},
    show: false,
  }

Details = () => {
  this.setState((prevState) => ({
     showMore: !prevState.showMore
  }));
}

showModal = () => {
  this.setState({ show: true });
};

hideModal = () => {
  this.setState({ show: false });
};

convertDate(date) {
  const newDate = new Date(date).toString().slice(3, 21);
  return newDate;
}

timeFromDate(date) {
  const newDate = new Date(date).toString().slice(15, 21);
  return newDate;
}

  render() {
    const { event: { location, description, htmlLink, summary, start, end }} = this.props;
    return (
      <div className="event">
         <div className="details-overview">
        <ul>
          <li className="location">{location}</li>
          <li className="summary">{summary}</li>
          <li className="date">
            {this.convertDate(start.dateTime) + ' -' + this.timeFromDate(end.dateTime)}
          </li>
          <li>{}</li>
          
          <li className="timezone">{start.timeZone} timezone</li>
          </ul>
           <Modal 
            description={description} htmlLink={htmlLink} summary={summary}
            show={this.state.show} handleClose={this.hideModal} />   
          <button className="details-btn open-btn" onClick={this.showModal}>More details</button>
          </div>
      </div>
    ) 
  }
}

export default Event;