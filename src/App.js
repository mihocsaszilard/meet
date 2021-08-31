import React, { Component } from 'react';
import './scss/App.scss';

import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
import NumberOfEvents from './components/NumberOfEvents';
import { extractLocations, getEvents } from './components/api';

import './scss/nprogress.scss';

class App extends Component {

 state = {
   events: [],
   locations: [],
   numberOfEvents: 32,
   currentLocation: 'all'
 }

 componentDidMount() {
  this.mounted = true;
  getEvents().then((events) => {
    if (this.mounted) {
    this.setState({ 
      events: events.slice(0, this.state.numberOfEvents),
      locations: extractLocations(events) 
      });
     }
   })
   .catch(error => {
    console.log(error);
  })
}

componentWillUnmount() {
  this.mounted = false;
}

 updateEvents = (location, eventCount) => {
   getEvents().then((events) => {
     let locationEvents = (location === 'all') ? 
     events
     : 
    events.filter((event) => event.location === location);
    locationEvents = locationEvents.slice(0, eventCount)
     this.setState({
       events: locationEvents,
       currentLocation: location
     });
   });
 }

 updateEventCount = (eventCount) => {
   this.setState({
     numberOfEvents: eventCount
   });
   const { currentLocation } = this.state;
   this.updateEvents(currentLocation, eventCount);
 };

 toTop = () => {
  window.scrollTo ({
    top: 0,
    behavior: 'smooth',
  });
 };

  render() {
    const { numberOfEvents, locations, events } = this.state;
    return (
      <div className="App">
        <div className="navbar"></div>
        <CitySearch locations={locations} updateEvents={this.updateEvents} />
        <EventList events={events}/>
        <NumberOfEvents updateEventCount={(e) => this.updateEventCount(e)} numberOfEvents={numberOfEvents} />
        <div className="shapes">
          <div className="shapes shape1"><div className="circle"></div></div>
          <div className="shapes shape2"><div className="circle"></div></div>
          <div className="shapes shape3"><div className="circle"></div></div>
          <div className="shapes shape4"><div className="circle"></div></div>
          <div className="shapes shape5"><div className="circle"></div></div>
          <div className="shapes shape6"><div className="circle"></div></div>
        </div>
        <button className="to-top" onClick={this.toTop} />
      </div>
    );
  }
}

export default App;