const {Given, Then, When} = require('@cucumber/cucumber')

Given ("I open React Storefront Homepage", function()
{
    return browser.navigateTo('http://localhost:3000/')
})


Given ("I open React Storefront Productpage", function()
{
    return browser.navigateTo('http://localhost:3000/p/1')
})

When (/^I click (.*?)$/, function(button)
{
     const buttons = {
         Category_1: '#__next > div.MuiPaper-root.MuiPaper-elevation2 > div > div > div.MuiTabs-scroller.MuiTabs-scrollable > div > a:nth-child(1)',
        
     }
    return browser
        .click(buttons[button])
})

Then (/^the title is (.*?)$/, function(title)
{
   return browser.assert.titleEquals(title)
})

When ("I click_search", function()
{
    return browser.click('#__next > header > div > div > form > div.RSFSearchField-root-79 > div > input')
})

Then (/^Click (.*?)$/, function(item)
{
    const items = {
       Product_1: '#__next > header > div > div > form > div.MuiPopover-root > div.MuiPaper-root.MuiPopover-paper.RSFSearchPopover-popoverPaper-85.MuiPaper-elevation8 > div.RSFSearchSuggestions-root-86 > div:nth-child(3) > div > ul > li:nth-child(1)',
       Category_1: '#__next > header > div > div > form > div.MuiPopover-root > div.MuiPaper-root.MuiPopover-paper.RSFSearchPopover-popoverPaper-85.MuiPaper-elevation8 > div.RSFSearchSuggestions-root-86 > div:nth-child(2) > div > ul > li:nth-child(1) > a > div > p'
    }
   browser.waitForElementVisible(items[item])
   return browser.click(items[item])
})


Then (/^The body contains (.*?)$/, function(body)
{
    const bodys = {
        Product_1: '#__next > main > div > form > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-4 > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-6.MuiGrid-grid-md-7 > div > div:nth-child(1) > div.PrivateHiddenCss-xsDown-31 > div > div > h1',
        Subcategory_1: '#__next > main > div > div.makeStyles-root-87 > div.MuiGrid-root.MuiGrid-container > div:nth-child(2) > h1'
    }
    browser.waitForElementVisible(bodys[body])
    return browser.assert.visible(bodys[body]);
})

Then (/^search (.*?)$/, function(item)
{
    const items = {
        Product_1: '#__next > header > div > div > form > div.MuiPopover-root > div.MuiPaper-root.MuiPopover-paper.RSFSearchPopover-popoverPaper-85.MuiPaper-elevation8 > div.RSFSearchSuggestions-root-86 > div:nth-child(3) > div > ul > li:nth-child(1)',
        //Category_1: '#__next > header > div > div > form > div.MuiPopover-root > div.MuiPaper-root.MuiPopover-paper.RSFSearchPopover-popoverPaper-85.MuiPaper-elevation8 > div.RSFSearchSuggestions-root-86 > div:nth-child(2) > div > ul > li:nth-child(1) > a > div > p'
     }
     browser.setValue('#__next > header > div > div > form > div.RSFSearchField-root-79 > div > input', [item , browser.Keys.ENTER])

})

Then ("I click_add", function()
{
    
    return browser.click('#__next > main > div > form > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-4 > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-6.MuiGrid-grid-md-7 > div > div:nth-child(4) > button')
})


When (/^I press (.*?)$/, function(color)
{
     const colors = {
         red: '#__next > main > div > form > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-4 > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-6.MuiGrid-grid-md-7 > div > div:nth-child(1) > div.RSFProductOptionSelector-root-149 > div:nth-child(1) > div > button',
        
     }
     browser.waitForElementVisible(colors[color])
    return browser.click(colors[color])
})

Then (/^I see (.*?)$/, function(picture)
{
    const pictures = {
        red_pic: '#__next > main > div > form > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-4 > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-6.MuiGrid-grid-md-5 > div.RSFMediaCarousel-root-90 > div.makeStyles-carousel-74.RSFCarousel-root-98 > div.makeStyles-root-102 > div.makeStyles-child-103 > div > div.RSFCarousel-autoPlaySwipeableViews-100 > div > div:nth-child(4) > div > img'
    }
    browser.waitForElementVisible(pictures[picture])
    return browser.assert.visible(pictures[picture])

})
