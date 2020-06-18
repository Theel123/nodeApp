const LivroDao = require('../infra/book-dao');
const db = require('../../config/database');

module.exports = (app) => {

    // Rota base

    app.get('/', function(req, res) {
        res.send('get');
    });

    // Rota para listar livros

    app.get('/books', function(req, res){

        const livroDao = new LivroDao(db);
        livroDao.lista()
                 .then(books => res.marko(
                     require('../views/books/list/list.marko'),
                         {
                            books: books
                         }
                    ))
                    .catch(error => console.log(error));
    });

    // Rota para adicionar livro

    app.post('/books' , function(req, res) {
        console.log(req.body);
        const livroDao = new LivroDao(db);
        livroDao.adiciona(req.body)
                .then(res.redirect('/books'))
                .catch(error => console.log(error));
    });

    // Rota para entrar no formulario

    app.get('/books/form', function(req, res) {
        res.marko(require('../views/books/form/form.marko'), {book: {} });
    });

    //Rota para editar um livro

    app.put('/books' , function(req, res) {
        console.log(req.body);
        const livroDao = new LivroDao(db);
        livroDao.atualiza(req.body)
                .then(res.redirect('/books'))
                .catch(error => console.log(error));
    });

    // Rota para editar um livro

    app.get('/books/form/:id', function(req, res) {
        const id = req.params.id;
        const livroDao = new LivroDao(db);

        livroDao.buscarPorId(id)
                .then(book =>
                    res.marko(
                        require('../views/books/form/form.marko'),
                        {book: book}
                    )
                )
                .catch(erro => console.log(erro));
    });

    //Rota para excluir um livro

    app.delete('/books/:id', function(req, res) {
        const id = req.params.id;

        const livroDao = new LivroDao(db);
        livroDao.remove(id)
                .then(() => res.status(200).end())
                .catch(error => console.log(error));
    });
};

