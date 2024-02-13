const addDays = require('date-fns/addDays')
const express = require('express')
const app = express()

app.get('/', (request, response) => {
  let date1 = addDays(new Date(), 100)
  response.send(
    `${date1.getDate()}/${date1.getMonth() + 1}/${date1.getFullYear()}`,
  )
})

module.exports = app

app.listen(3000)
