const express = require('express')
const app = express()
const port = 3000

const data = [ 
    {
        "title": "Ferocious",
        "description": "super ferocious",
        "price": 30
    },
    {
        "title": "Fabolous",
        "description": "super fabulous",
        "price": 50
    },
    {
        "title": "Extraordinary",
        "description": "super extraordinary",
        "price": 150
    }
]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/products',(req, res)=>{
    res.json(data)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})