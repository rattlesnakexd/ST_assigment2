Feature: Searching suggestions Feature
Background: Goto Website
  Given I open React Storefront Homepage

Scenario Outline: Searching Suggestions
  When I click_search
  And Click <item>
  Then The body contains <body>

  Examples:
  | item | body |
  | Product_1 | Product_1 |
  | Category_1 | Subcategory_1 |
