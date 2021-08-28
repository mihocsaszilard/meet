import React from 'react';
import { shallow } from 'enzyme';
import EventList from "../components/EventList";
import Event from '../components/Event';
import { mockData } from "../components/mock-data";


/*Scenario 1*/
describe('<EventList/> Component', () => {

  test('render correct number of events', () => {
    const EventListWrapper = shallow(<EventList events={mockData}/>);
    expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
  });
//-----------

});