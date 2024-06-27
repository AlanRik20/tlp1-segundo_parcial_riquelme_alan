const database = require("../bd");
const ctrl = {}

const viewBook=(req, res)=>{
    res.json(database)
}


module.exports={viewBook}

