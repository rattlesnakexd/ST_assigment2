Feature: Product color
Background: Goto Product page
  Given I open React Storefront Productpage
 
Scenario Outline: Testing color selection of products
  When I press <color> 
  Then I see <picture>

  Examples:
  | color | picture |
  | red | red_pic |
