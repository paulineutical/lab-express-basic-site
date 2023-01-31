const express = require("express")
const app = express()
const port = 3000

app.use(express.static(__dirname + "/public"))

app.get("/", (req, res) => {
//   res.send("<h1>This is the homepage</h1>")
  res.sendFile(__dirname + "/views/home.html")
})

app.get("/biography", (req, res) => {
  res.sendFile(__dirname + "/views/biography.html")
})

app.get("/books", (req, res) => {
  res.sendFile(__dirname + "/views/books.html")
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
