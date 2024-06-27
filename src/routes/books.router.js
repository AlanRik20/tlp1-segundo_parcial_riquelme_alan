const {viewBook, deleteBook} = require("../controller/books.controller");
const express = require("express")

const router = express.Router()

router.get("/book", viewBook)

router.delete("/book/delete/:id", deleteBook)

module.exports=router