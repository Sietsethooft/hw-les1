const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Yooo broskis')
})

app.listen(3000)