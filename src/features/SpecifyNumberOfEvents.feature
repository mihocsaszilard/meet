Feature: specify the number of events

  Scenario: When the user hasn’t specified a number, 32 is the default number
    Given the user opens the app
    When the user sees the elements
    Then there are 32 elements by default

  Scenario: Users can change the number of events they want to see
    Given the user opens the app
    When the user specifies the number of events
    Then there will be a specified number of elements
