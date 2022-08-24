const express = require('express')
const cors = require('cors')
const app = express()

//middleware used:
app.use(cors())
app.use(express.json())

const results = [
    {id: 1, title: "Broccoli Soup", snippet: "Learn how to make this soup"},
    {id: 2, title: "Broccoli Soup", snippet: "Learn how to make this soup"},
    {id: 3, title: "Broccoli Soup", snippet: "Learn how to make this soup"},
    {id: 4, title: "Broccoli Soup", snippet: "Learn how to make this soup"},
    {id: 5, title: "Broccoli Soup", snippet: "Learn how to make this soup"},
    {id: 6, title: "Broccoli Soup", snippet: "Learn how to make this soup"},
    {id: 7, title: "Broccoli Soup", snippet: "Learn how to make this soup"},
    {id: 8, title: "Broccoli Soup", snippet: "Learn how to make this soup"},
    {id: 9, title: "Broccoli Soup", snippet: "Learn how to make this soup"},
    {id: 10,title: "Broccoli Soup", snippet: "Learn how to make this soup"},
]; 

//send data to server to check connection
app.get('/', (req,res) => {
    res.send('Hello World!')
})

//route to retrieve all search results
app.get('/results', (req, res) => {
    res.json(results)
})



// export modules:
module.export = app;
