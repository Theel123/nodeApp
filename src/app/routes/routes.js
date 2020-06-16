module.exports = (app) => {
    app.get('/', function(req, res) {
        res.send('get');
    });

    app.get('/books', function(req, res){
        res.marko(
            require('../views/books/list/list.marko'),
            {
                books: [
                    {
                        id: 1,
                        titulo: 'Fundamentos Node'
                    },
                    {
                        id: 2,
                        titulo: 'Fundamentos PHP'
                    }

                ]
            }
        );
    });
}

