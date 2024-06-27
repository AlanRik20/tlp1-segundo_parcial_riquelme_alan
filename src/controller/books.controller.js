const database = require("../bd");

const viewBook = (req, res) => {
    res.json(database)
}

const deleteBook = (req, res) => {
    const { id } = parseInt(req.params.id)
    const buscar = database.find((title) => title.id === id)
    const indice = database.indexOf(buscar)
    const borrar = database.splice(indice, 1)
    res.json({ mensaje: "libro eliminado", borrar })
}

const insertBook = (req, res) => {
    let id = database.length + 1;
    const { title, author, year } = req.body;

    if (typeof title !== 'string' || typeof author !== 'string') {
        res.status(400).json({ message: "El título y el autor deben ser texto" });
    }

    !title || !author || !year ? res.json({ message: "Todos los campos son obligatorios" }) : database.push({ id: id, title: title, author: author, year: year });
    res.json({ mensaje: "libro agregado" })

}

const modifyBook = (req, res) => {
    const { title, author, year } = req.body
    const id = parseInt(req.params.id)

    const buscar = database.find((book) => book.id === id);
    buscar.title = title;
    buscar.author = author;
    buscar.year = year;

    res.json({ mensaje: "libro agregado" })
}

const selectBookId = (req, res) => {
    try {
        const id = parseInt(req.params.id)

        const buscar = database.find((title) => title.id === id)

        if (!buscar) {
            res.json({ mensaje: "libro no encontrado" })
        }

        res.json(buscar);


    } catch (error) {
        res.json({ mensaje: "error" })
    }

}

module.exports = { viewBook, deleteBook, insertBook, modifyBook, selectBookId }

