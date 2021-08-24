import { shallow } from 'enzyme';
import EventList from "../EventList";
import Event from '../Event';
import { mockData } from "../mock-data";


/*Scenario 1*/
describe('<EventList/> Component', () => {

  test('render correct number of events', () => {
    const EventListWrapper = shallow(<EventList events={mockData}/>);
    expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
  });
//-----------

});