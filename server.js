const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/name', (req, res) => {
    res.send('who are u!')
  })

  app.get('/man', (req, res) => {
    res.send('who this man!')
  })

  app.get('/myname', (req, res) => {
    res.send('my name is khan!')
  })
      
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})