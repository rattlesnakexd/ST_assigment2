const {Given, Then, When} = require('@cucumber/cucumber')

Given ("I open React Storefront Homepage", function()
{
    return browser.navigateTo('http://localhost:3000/')
})

Then ("The title is {string}", function(title)
{
    
    return browser.assert.titleEquals(title)
})

When (/^I click (.*?)$/, function(button)
{
   return browser.click(button)
})

Then (/^the title is (.*?)$/, function(title)
{
   return browser.assert.titleEquals(title)
})