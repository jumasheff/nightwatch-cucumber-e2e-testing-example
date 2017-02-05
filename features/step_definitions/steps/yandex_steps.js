const { client } = require('nightwatch-cucumber')

function yandex_steps({ Given, Then, When }) {
  Given(/^I open Yandex`s search page$/, () => {
    return client
        .url('https://www.yandex.ru/')
        .waitForElementVisible('body')
  })

  Then(/^Yandex page`s title is "(.*?)"$/, (text) => {
    return client.assert.title(text)
  })

  Then(/^the Yandex search form exists$/, () => {
    return client.assert.visible('input[name="text"]')
  })
}

module.exports = yandex_steps