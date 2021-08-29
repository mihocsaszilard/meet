import React from "react";
import { mount } from "enzyme";
import App from "../App";
import { loadFeature, defineFeature } from "jest-cucumber"; 
import EventList from "../components/EventList";
import Event from "../components/Event";
import { mockData } from "../components/mock-data";

const feature = loadFeature('./src/features/ShowHideEventDetails.feature');

defineFeature(feature, test => {

  let AppWrapper, EventWrapper;
  test('An event element is collapsed by default', ({ given, when, then }) => {

    given('the user is on the main page', () => {
      AppWrapper = mount(<App />);
    });

    when('the elements are collapsed', () => {
      AppWrapper = mount(<App />);
      const modal = AppWrapper.find('.modal');
      expect(modal.find('.display-none')).toHaveLength(1); //contains display-none class => invisible
    });

    then('the user should see the event elements', () => {
      const elements = (AppWrapper.find(EventList));
      expect(elements).toBeDefined();
    });
  });

  test('The user can expand an event to see its details', ({ given, when, then }) => {
       
    given('the user is on the main page',  () => {
      EventWrapper = mount(<Event event={mockData[0]} />);
    });

    when('the user clicks to an element',  () => {
      EventWrapper.find('.open-btn').simulate('click');
    });

    then('the element expands and the user can see the event details', async () => {
      expect(EventWrapper.find('.modal')).toHaveLength(1);
    });
  });

  test('The user can collapse an event to hide its details', ({ given, when, then }) => {
    EventWrapper = mount(<Event event={mockData[0]} />);
    given('the user sees the expanded element', () => {
      expect(EventWrapper.find('.modal')).toHaveLength(1);
    });

    when('the user clicks to the element', () => {
      EventWrapper.find('.close-btn').simulate('click');
    });

    then('the element collapses and the user can\'t see the event details', () => {
      expect(EventWrapper.find('.modal').hasClass('display-none')).toBeTruthy();
    });
  });
});