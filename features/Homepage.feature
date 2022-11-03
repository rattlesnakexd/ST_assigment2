Feature: React Storefront HomePage
Background: Goto Website
  Given I open React Storefront Homepage
 

Scenario Outline: Testing buttons on Homepage
  When I click <button> 
  Then the title is <title>

  Examples: 
  | button | title |
  | #__next > div.MuiPaper-root.MuiPaper-elevation2 > div > div > div.MuiTabs-scroller.MuiTabs-scrollable > div > a:nth-child(1) | Subcategory 1 |
  | #__next > header > div > div > a.MuiButtonBase-root.MuiIconButton-root.RSFCartButton-link-24.MuiIconButton-colorInherit | |
