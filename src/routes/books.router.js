const {viewBook, deleteBook, insertBook, modifyBook, selectBookId, insertById} = require("../controller/books.controller");
const express = require("express")

const router = express.Router()

router.get("/book", viewBook)

router.delete("/book/delete/:id", deleteBook)

router.post("/book/insert", insertBook)

router.put("/book/update/:id", modifyBook)

router.get("/book/:id", selectBookId)

router.post("/book/insertId/:id", insertById)

module.exports=router