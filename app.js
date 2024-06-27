const express = require("express")
const app = express()
const PORT = 4000
app.use(express.json())

const router = require("./src/routes/books.router")

app.use(router)

app.listen(4000, ()=>console.log(`servidor funcionando en ${PORT}`));