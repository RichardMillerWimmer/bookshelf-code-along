let books = [];
let id = 0;


module.exports = {
    read: (req, res) => {
        res.status(200).send(books)
    },
    create: (req, res) => {
        const { title, author } = req.body
        books.push({
            id: id,
            title: title,
            author: author
        })
        id++
        res.status(200).send(books)
    },


    update: (req, res) => {
        const { id } = req.params
        const { title, author } = req.body
        let bookIndex = null
        books.forEach((elem, i) => {
            if (elem.id === +id) {
                bookIndex = i
            }
        })
        books[bookIndex] = {
            id: +id,
            title: title,
            author: author
        }
        // books.splice(bookIndex, 1, updateBook)
        res.status(200).send(books)

    },

    // delete: (req, res) => {
    //     const { id } = req.params
    //     books = books.filter(elem => {
    //         elem.id !== +id
    //     })
    // },
    delete: (req, res) => {
        let bookIndex = null
        books.forEach((elem, i) => {
            if (elem.id === +req.params.id) {
                bookIndex = i
            }
        })
        books.splice(bookIndex, 1)
        res.status(200).send(books)
    }

};

