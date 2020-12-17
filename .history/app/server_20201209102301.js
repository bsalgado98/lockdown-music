const express = require("express")
const app = express()
const port = 3000

app.get("/index.html")
app.use(express.static("./"))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))