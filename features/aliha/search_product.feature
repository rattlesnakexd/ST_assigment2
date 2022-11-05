Feature: Searching Feature
Background: Goto Website
  Given I open React Storefront Homepage

Scenario Outline: Searching prduct
  When I click_search
  And search <item>

  Examples:
  | item |
  | Product 1 |
