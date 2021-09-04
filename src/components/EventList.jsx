import React, { Component } from "react";

import Event from "./Event.jsx";
import Modal from "./modal.jsx";

class EventList extends Component {
  render() {    
    return (
      <div className="modal-container">
      <ul className="EventList">
        {this.props.events.map(event => 
          <li className="listItem" key={event.id}>
            <Event event={event} />           
          </li>
        )} 
      </ul>
      <Modal />
    </div>
    );    
  }
}

export default EventList;