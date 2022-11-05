Feature: Adding Feature
Background: Goto Website
  Given I open React Storefront Homepage

Scenario Outline: Adding product
  When I click_search
  And Click <item>
  Then The body contains <body>
  Then I click_add

  Examples:
  | item | body |
  | Product_1 | Product_1 |