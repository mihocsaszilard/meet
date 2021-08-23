import React from "react";
import { shallow } from "enzyme";
import Event from "./../Event";

describe('<Event /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event />)
  });

  test('event exists', () => {
    expect(EventWrapper.find(Event)).toHaveLength(1);
  });

  test('detect button', () => {
    expect(EventWrapper.find('button')).toHaveLength(2);
  });

  test('details are collapsed, on click expands', () => {
    const toggle = EventWrapper.state({ showMore: true})
    EventWrapper.find('.moreDetails').simulate('click', toggle);
    expect(EventWrapper.state('showMore')).toBeFalsy();
  });

  test('details are expanded, on click collapses', () => {
    const toggle = EventWrapper.state({ showMore: false})
    EventWrapper.find('.lessDetails').simulate('click', toggle);
    expect(EventWrapper.state('showMore')).toBeTruthy();
  });
});