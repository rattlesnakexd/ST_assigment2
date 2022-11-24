Feature: Product Quantity Increase
Background: Goto Website
  Given I open React Storefront Productpage
 
Scenario Outline: Testing buttons on Productpage
  When I click <PlusButton>
  Then <quantity> increases

  Examples: 
  | PlusButton | quantity |
  | + | 2 |