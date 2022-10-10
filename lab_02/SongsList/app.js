const fs = require("fs").promises;
const express = require('express')
const app = express()

const wwwrootdir = "wwwroot"
app.use(express.static('wwwroot'))

app.get("/", (req, res) => {

  res.sendFile(process.cwd() + "/" + wwwrootdir + "/index.html")
})

app.get('/api/songs', async (req, res) => {
  let querystring = ""
  if(req.query){
    querystring = req.query.song;
  } else {
    querystring = "";
  }
  songLyricsFolder = await fs.readdir(wwwrootdir + "/song_lyrics")
  console.log(songLyricsFolder)
  songLyricsFolder.forEach(song => {
    if (song.includes(querystring)) {
      console.log(song)
    }
  })
  res.send(querystring)
})



app.listen(3000, () => {
  console.log('Example app listening at http://localhost:3000')
})
