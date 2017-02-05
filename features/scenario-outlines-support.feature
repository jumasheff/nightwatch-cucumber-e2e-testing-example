Feature: Scenario outlines support

Scenario Outline: Expression in Google

  Given I open Google`s page
  When I search for <expression>
  Then search result should contain the following: <result>

  Examples:
    | expression | result |
    | 36/6       | 6      |
    | 500+120    | 620    |
