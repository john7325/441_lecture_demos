import express from 'express'
import enableWs from "express-ws"; 

const app = express()
enableWs(app); 

app.get('/', (req, res) => {
    res.sendFile(process.cwd() + "/index.html")
})

let allSockets = [];
let socketCounter = 1;

app.ws("/chatSocket", (ws, res) => { 
  mySocketNum = socketCounter; 
  socketCounter++; 
  
  console.log("user " + mySocketNum + " connected to the socket")
  allSockets.push(ws); 

  ws.on('message', msg => { 
    console.log("msg (user + " + mySocketNum +"):" + msg); 
    allSockets.forEach( socket => { 
      socket.send(mySocketNum + ": " + msg); 
    })
  })

  ws.on("close", () => { 
    console.log("user " + mySocketNum + " disconnected"); 
  })
})

app.listen(3000, () => {
    console.log("Example app listening at http://localhost:3000")
})