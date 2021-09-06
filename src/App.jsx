import React, { Component } from 'react';
import EventList from './components/EventList.jsx';
import CitySearch from './components/CitySearch.jsx';
import NumberOfEvents from './components/NumberOfEvents.jsx';
import { extractLocations, getEvents, checkToken, getAccessToken } from './components/api';
import { WarningAlert } from './components/Alert.jsx';
import WelcomeScreen from './components/WelcomeScreen.jsx';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import './scss/App.scss';
import './scss/nprogress.scss';

class App extends Component {

 state = {
   events: [],
   locations: [],
   numberOfEvents: 32,
   currentLocation: 'all',
   showWelcomeScreen: undefined,
  }

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ events, locations: extractLocations(events) });
        }
      });
    } 
  }
  
  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      let locationEvents = (location === 'all') ? 
      events : 
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

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map ((location) => {
      const number = events.filter((event) => event.location === location).length
      const cities = location.split(', ').shift()
      return { cities, number };
    });
    return data;
  };

  render() {
    const { numberOfEvents, locations, events } = this.state;
    
    if (this.state.showWelcomeScreen === undefined) 
    return <div className="App" />
    
    return (
      <div className="App">
        <div className="navbar">
          <button className="logo"
            type="button"
            onClick={(e) => {
            e.preventDefault();
            window.location.href=<a href="https://mihocsaszilard.github.io/meet/" alt="redirects to homepage"> </a>;
          }}/>
          
         { !navigator.onLine ? (<WarningAlert text='You are offline!' />) : (<WarningAlert text=' ' />)}

        </div>
        <CitySearch locations={locations} updateEvents={this.updateEvents} />
        <ResponsiveContainer height={400}>
          <ScatterChart width={800} height={400}
            margin={{ top: 50, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid />
            <XAxis type="category" dataKey="cities" name="cities" />
            <YAxis type="number" dataKey="number" name="number of events" allowDecimals={false} />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter data={this.getData()} fill="#fff" />
          </ScatterChart>
        </ResponsiveContainer>
        <EventList events={events}/>
                
        <div className="shapes">
          <div className="shapes shape1"><div className="circle"></div></div>
          <div className="shapes shape2"><div className="circle"></div></div>
          <div className="shapes shape3"><div className="circle"></div></div>
          <div className="shapes shape4"><div className="circle"></div></div>
          <div className="shapes shape5"><div className="circle"></div></div>
          <div className="shapes shape6"><div className="circle"></div></div>
        </div>
        <button className="to-top" onClick={this.toTop} />
        <div className="footer">
          <NumberOfEvents updateEventCount={(e) => this.updateEventCount(e)} numberOfEvents={numberOfEvents} />
        </div>

        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }} />
      </div>
    );
  }
}

export default App;