Feature: Show More Products
Background: Goto Website
  Given I open React Storefront Subcategory Page
 
Scenario Outline: Testing buttons on Subcategory Page
  When I click <button> 
  Then <product> is visible

  Examples: 
  | button | product |
  | ShowMore | product11 |