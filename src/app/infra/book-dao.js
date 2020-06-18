class LivroDao {

    constructor(db) {
        this._db = db;
    }

    adiciona(book) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                INSERT INTO books (
                    titulo,
                    preco,
                    descricao
                ) values (?, ?, ?)`
                ,
                [
                    book.titulo,
                    book.preco,
                    book.descricao
                ],
                function (error) {
                    if (error) {
                        console.log(error);
                        return reject('Não foi possivel adicionar o livro');
                    }
                    resolve();
                }
            )
        });
    }

    lista() {
        return new Promise((resolve, reject) => {
            this._db.all(
                'SELECT * FROM books',
                (error, results) => {
                    if (error) return reject('Não foi possivel listar os livros');
                    return resolve(results);
                }
            )
        });
    }

    buscarPorId(id) {

        return new Promise((resolve, reject) => {
            this._db.get(
                `
                    SELECT *
                    FROM books
                    WHERE id = ?
                `,
                [id],
                (erro, book) => {
                    if (erro) {
                        return reject('Não foi possível encontrar o livro!');
                    }
                    return resolve(book);
                }
            );
        });
    }

    atualiza(book) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                UPDATE books SET
                titulo = ?,
                preco = ?,
                descricao = ?
                WHERE id = ?
            `,
            [
                book.titulo,
                book.preco,
                book.descricao,
                book.id
            ],
            erro => {
                if (erro) {
                    return reject('Não foi possível atualizar o livro!');
                }

                resolve();
            });
        });
    }

    remove(id) {

        return new Promise((resolve, reject) => {
            this._db.get(
                `
                    DELETE
                    FROM books
                    WHERE id = ?
                `,
                [id],
                (erro) => {
                    if (erro) {
                        return reject('Não foi possível remover o livro!');
                    }
                    return resolve();
                }
            );
        });
    }
}

module.exports = LivroDao;