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

const insertBook = (req, res)=>{
    const {id, title, author, year} = req.body

    const agregar = database.push({id,title,author,year})

    res.json({mensaje:"libro agregado", agregar})

}

const modifyBook = (req, res)=>{
    const {title, author, year} = req.body
    const id = parseInt(req.params.id)

    const buscar = database.find((book)=>book.id===id);
    buscar.title=title;
    buscar.author=author;
    buscar.year=year;

    res.json({mensaje:"libro agregado"})
}

const selectBookId = (req, res)=>{
    try {
    const id = parseInt( req.params.id)
    
    const buscar = database.find((title)=>title.id===id)
    
    if(!buscar){
        res.json({mensaje:"libro no encontrado"})
    }
        
    res.json(buscar);


    } catch (error) {
        res.json({mensaje:"error"})
    }

}

module.exports={viewBook, deleteBook, insertBook, modifyBook, selectBookId}

