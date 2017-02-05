const { client } = require('nightwatch-cucumber')

function scenario_outlines({ Given, Then, When }) {
  Given(/^I open Google`s page$/, () => {
    return client
        .url('http://google.com')
        .waitForElementVisible('body')
  })

  When(/^I search for (.*?)$/, (expression) => {
    return client
        .setValue('input[name=q]', expression)
        .submitForm('input[name=q]')
        .click('button[name=btnG]')
  })

  Then(/^search result should contain the following: (.*?)$/, (result) => {
    return client
        .waitForElementVisible('div[id=cwotbl]')
        .assert.containsText('body', result)
  })
}

module.exports = scenario_outlines