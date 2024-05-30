const express = require('express')
const app = express()

app.use(express.json())

// GET
app.get('/get', (request, response) => {
  response.send('GET Request Received')
})

// POST
app.post('/post', (request, response) => {
  response.send('POST Request Received')
})

// PUT
app.put('/resources/:id', (request, response) => {
  const {id} = request.params
  response.send(`PUT request received for resource with ID: ${id}`)
})

// PATCH
app.patch('/resources/:id', (request, response) => {
  const {id} = request.params
  response.send(`PATCH request received for resource with ID: ${id}`)
})

// DELETE
app.delete('/resources/:id', (request, response) => {
  const {id} = request.params
  response.send(`DELETE request received for resource with ID: ${id}`)
})

//server is running at PORT 3000

app.listen(3000, (request, response) => {
  console.log('Server is running on http://localhost:3000')
})
