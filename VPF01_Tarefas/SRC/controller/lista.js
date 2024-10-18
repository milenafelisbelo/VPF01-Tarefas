const con = require('../connect/banco').con;

const create = (req, res) => {
    let titulo = req.body.titulo;
    let descricao = req.body.descricao;
    let data_criacao = req.body.data_criacao;
    let nome_pessoa = req.body.nome_pessoa;

    let query = `INSERT INTO lista (titulo, descricao, data_criacao, nome_pessoa) VALUES`
    query += `('${titulo}', '${descricao}', '${data_criacao}', '${nome_pessoa}');`;
    con.query(query, (err, result) => {
        if(err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

const read = (req, res) => {
    con.query('SELECT * FROM lista', (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

const deletar = (req, res) => {
    const id = req.params.id;
    const query = 'DELETE FROM lista WHERE id = ?';
    con.query(query,[id], (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

module.exports = {
    create,
    read,
    deletar
}