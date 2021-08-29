import React from "react";
import { mount } from "enzyme";
import App from "../App";
import { loadFeature, defineFeature } from "jest-cucumber";
import EventList from "../components/EventList";


const feature = loadFeature('./src/features/SpecifyNumberOfEvents.feature');

defineFeature(feature, test => {
  let AppWrapper;
  test('When the user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => { 
    given('the user opens the app', () => {
      AppWrapper = mount(<App />);
    });

    when('the user sees the elements', () => {
      expect(AppWrapper.find(EventList)).toBeDefined();
    });

    then('there are 32 elements by default', () => {
     AppWrapper.update();
     expect(AppWrapper.state('numberOfEvents')).toEqual(32);
    });
  });

  test('Users can change the number of events they want to see', ({ given, when, then }) => {
    given('the user opens the app', () => {
      AppWrapper = mount(<App />);
    });

    when('the user specifies the number of events', () => {
      AppWrapper.find('.eventNumber').simulate('change', { target: { value: 2 }});
    });

    then('there will be a specified number of elements', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.listItem')).toHaveLength(2);
    });
  });
});