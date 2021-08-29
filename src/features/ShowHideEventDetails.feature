Feature: Show/hide an event’s details

  Scenario: An event element is collapsed by default
    Given the user is on the main page
    When the elements are collapsed
    Then the user should see the event elements

  Scenario: The user can expand an event to see its details
    Given the user is on the main page
    When the user clicks to an element
    Then the element expands and the user can see the event details

  Scenario: The user can collapse an event to hide its details
    Given the user sees the expanded element
    When the user clicks to the element
    Then the element collapses and the user can't see the event details
