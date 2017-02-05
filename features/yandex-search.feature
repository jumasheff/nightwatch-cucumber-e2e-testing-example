Feature: Yandex Search

Scenario: Searching Yandex

  Given I open Yandex`s search page
  Then Yandex page`s title is "Яндекс"
  And the Yandex search form exists

Scenario: Searching Yandex again

  Given I open Yandex`s search page
  Then Yandex page`s title is "Яндекс"
  And the Yandex search form exists
