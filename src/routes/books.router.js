const {viewBook} = require("../controller/books.controller");
const express = require("express")

const router = express.Router()

router.get("/book", viewBook)

module.exports=router