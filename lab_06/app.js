import express from 'express'
import enableWs from 'express-ws'

const app = express()
enableWs(app)

app.get('/', (req, res) => {
    res.sendFile(process.cwd() + "/index.html")
})

// TODO: add chat websocket
let allSockets = []
let socketCounter = 1

app.ws('/chatSocket', (ws, res) => {
    let mySocketNum = socketCounter

    allSockets[mySocketNum] = {
        socket: ws, 
        name: mySocketNum
    }

    console.log("user " + mySocketNum + " connected")
    socketCounter++

    ws.on('message', msg => {
        const msgJson = JSON.parse(msg)

        if (msgJson.action == 'sendChat') {
            const myName = allSockets[mySocketNum].name
            for (const [socketNum, socketInfo] of Object.entries(allSockets)) {
                socketInfo.socket.send(myName + " : " + msgJson.value)
            }
        } else if (msgJson.action == 'updateName') {
            allSockets[mySocketNum].name = msgJson.value
        }
    })

    ws.on('close', () => {
        delete allSockets[socketCounter];
        console.log("user " + mySocketNum + " disconnected")
    })
})

app.listen(3000, () => {
    console.log("Example app listening at http://localhost:3000")
})