Feature: HomePage
Background: Goto Website
  Given I open React Storefront Homepage
 
Scenario Outline: Testing buttons on Homepage
  When I click <button> 
  Then the title is <title>

  Examples: 
  | button | title |
  | Category_1 | Subcategory 1 |

