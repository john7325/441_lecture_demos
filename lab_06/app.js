import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.sendFile(process.cwd() + "/index.html")
})

// TODO: add chat websocket

app.listen(3000, () => {
    console.log("Example app listening at http://localhost:3000")
})