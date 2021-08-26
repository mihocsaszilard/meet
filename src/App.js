import React, { Component } from 'react';
import './App.scss';

import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';

import './nprogress.css';

class App extends Component {

 state = {
   events: [],
   locations: [],
   numberOfEvents: 8,
   currentLocation: undefined
 }

 componentDidMount() {
  this.mounted = true;
  getEvents().then((events) => {
    if (this.mounted) {
    this.setState({ events: events.slice(0, this.state.numberOfEvents),
                    locations: extractLocations(events) });
     }
   });
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
   const { currentLocation } = this.state;
   this.setState({
     numberOfEvents: eventCount
   });
   this.updateEvents(currentLocation, eventCount);
 };

  render() {
    const { numberOfEvents, locations, events } = this.state;
    return (
      <div className="App">
        <CitySearch locations={locations} updateEvents={this.updateEvents} />
        <EventList events={events}/>
        <NumberOfEvents numberOfEvents={numberOfEvents} updateEventCount={this.updateEventCount}/>
      </div>
    );
  }
}

export default App;