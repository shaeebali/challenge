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
    {id: 4, title: "Lentil Soup", snippet: "Learn how to make this soup"},
    {id: 5, title: "Broccoli Soup", snippet: "Learn how to make this soup"},
    {id: 6, title: "Broccoli Soup", snippet: "Learn how to make this soup"},
    {id: 7, title: "Broccoli Soup", snippet: "Learn how to make this soup"},
    {id: 8, title: "Broccoli Soup", snippet: "Learn how to make this soup"},
    {id: 9, title: "Broccoli Soup", snippet: "Learn how to make this soup"},
    {id: 10,title: "Broccoli Soup", snippet: "Learn how to make this soup"},
]; 

//send data to server to check connection
app.get('/', (req, res) => {
    res.send('Hello World!')
})

//route to retrieve all search results
app.get('/results', (req, res) => {
    res.json(results)
})


// route to retrieve results by their IDs and throw error if incorrect
app.get('/results/:id', (req, res) => {
    try {
        const resultId = parseInt(req.params.id)
        const selectedResult = results.find(c => c.id === resultId)
        if(!selectedResult) {
            throw new Error('This result does not exist, choose a number between 1 and 10, thanks.')
        }
        res.send(selectedResult)
    } catch(err) {
        res.status(404).send({message: err.message})
    }
})

const getAllResults = arr => {
    if (Array.isArray(arr)) {
        return arr[Math.floor(Math.random() * arr.length)]
    }
    throw new Error('Expected an array');
}
module.exports = { getAllResults };


// export modules:
module.exports = app;
