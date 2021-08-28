import React from 'react'; 
import { shallow, mount } from 'enzyme';
import App from '../App';

import EventList from '../components/EventList';
import CitySearch from '../components/CitySearch';
import { mockData } from '../components/mock-data';
import { extractLocations, getEvents } from '../components/api'


/*Scenario 1 */
describe('<App/> component', () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });

  test('render list of events', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });
  //-------------

/*Scenario 2*/
  test('render CitySearch', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });
//-------------
});

/*Integration test */
describe('<App /> integration', () => {

  test('App passes "events" state as a prop to EventList', () => {
    const AppWrapper = mount(<App />);
    const AppEventState = AppWrapper.state('events');
    expect(AppEventState).not.toEqual(undefined);
    expect(AppWrapper.find(EventList).props().events).toEqual(AppEventState);
    AppWrapper.unmount();
  });

  test('App passes "locations" state as a prop to CitySearch', () => {
    const AppWrapper = mount(<App />);
    const AppLocationState = AppWrapper.state('locations');
    expect(AppLocationState).not.toEqual(undefined);
    expect(AppWrapper.find(CitySearch).props().locations).toEqual(AppLocationState);
    AppWrapper.unmount();
  });

  test('get list of events matching the city selected by user', async () => {
    const AppWrapper = mount(<App />);
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    const locations = extractLocations(mockData);
    CitySearchWrapper.setState({ suggestions: locations });
    const suggestions = CitySearchWrapper.state('suggestions');
    const selectedIndex = Math.floor(Math.random() * (suggestions.length));
    const selectedCity = suggestions[selectedIndex];
    await CitySearchWrapper.instance().handleItemClicked(selectedCity);
    const allEwents = await getEvents();
    const eventsToShow = allEwents.filter(event => event.location === selectedCity);
    expect(AppWrapper.state('events')).toEqual(eventsToShow);
    AppWrapper.unmount();
  });

  test('get list of all events when user clicks on "See all cities"', async () => {
    const AppWrapper = mount(<App />);
    const suggetionItems = AppWrapper.find(CitySearch).find('.suggestions li');
    await suggetionItems.at(suggetionItems.length - 1).simulate('click');
    const allEvents = await getEvents();
    expect(AppWrapper.state('events')).toEqual(allEvents);
    AppWrapper.unmount();
  });
});