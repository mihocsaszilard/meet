import React from "react";
import { shallow } from "enzyme";
import Event from "./../Event";
import { mockData } from "../mock-data";
import Modal from "../modal";

describe('<Event /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[0]} />)
  });

  beforeEach(() => {
    EventWrapper.setState({ show : false });
  });

  test('render list of events', () => {
    expect(EventWrapper.find(Modal)).toHaveLength(1);
  });

  test('detect show MORE button', () => {
    expect(EventWrapper.find('.moreDetails')).toHaveLength(0);
  });

  test('detect show LESS button', () => {
    EventWrapper.setState({ show : true });
    expect(EventWrapper.find('.details-btn')).toEqual({});
  });

  test('details are expanded, on click collapses', () => {
    const toggle = EventWrapper.state({ show: true })
    EventWrapper.find('.details-btn').simulate('click', toggle);
    expect(EventWrapper.state('show')).toBeTruthy();
  });

  test('details are collapsed, on click expands', () => {
    const toggle = EventWrapper.state({ show: false })
    EventWrapper.find('.details-btn').simulate('click', toggle);
    expect(EventWrapper.state('show')).toBeTruthy();
  });
});