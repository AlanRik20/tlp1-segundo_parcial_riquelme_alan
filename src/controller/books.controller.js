const { title } = require("process");
const database = require("../bd");
const ctrl = {}

const viewBook=(req, res)=>{
    res.json(database)
}

const deleteBook =(req, res)=>{
    const {id} = parseInt(req.params.id)
    const buscar = database.find((title)=>title.id===id)
    const indice = database.indexOf(buscar)
    const borrar = database.splice(indice, 1)
    res.json({mensaje:"libro eliminado", borrar})
}


module.exports={viewBook, deleteBook}
