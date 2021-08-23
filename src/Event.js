import React, { Component } from "react";

class Event extends Component {
  state = {
    showMore: false,
  }

ShowMore = () => {
  this.setState((showMore) => ({
     showMore: !showMore
  }));
}

ShowLess = () => {
  this.setState((showMore) => ({
     showMore: showMore
  }));
}

  render() {
    return (
      <div className="event">
        <Event />
        <button className="moreDetails" onClick={() => this.ShowMore()}></button>
        <button className="lessDetails" onClick={() => this.ShowLess()}></button>
      </div>
    ) 
  }
}

export default Event;