Feature: Product Quantity Decrease
Background: Goto Website
  Given I open React Storefront Productpage
 
Scenario Outline: Testing buttons on Productpage
  When I click <MinusButton>
  Then <quantity> decreases

  Examples: 
  | MinusButton | quantity |
  | - | 1 |


  