import React from "react";
import { shallow } from "enzyme";
import Event from "./../Event";
import { mockData } from "../mock-data";

describe('<Event /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[0]} />)
  });

  beforeEach(() => {
    EventWrapper.setState({ showMore : false });
  })

  test('detect show MORE button', () => {
    expect(EventWrapper.find('.moreDetails')).toHaveLength(1);
  });

  test('detect show LESS button', () => {
    EventWrapper.setState({ showMore : true });
    expect(EventWrapper.find('.lessDetails')).toHaveLength(1);
  });

  test('details are expanded, on click collapses', () => {
    const toggle = EventWrapper.state({ showMore: true })
    EventWrapper.find('.moreDetails').simulate('click', toggle);
    expect(EventWrapper.state('showMore')).toBeTruthy();
  });

  test('details are collapsed on default', () => {
    expect(EventWrapper.state('showMore')).toBeFalsy();
  });
});