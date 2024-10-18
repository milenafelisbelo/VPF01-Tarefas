const mysql = require('mysql')

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'lista_mercado'
})
con.connect((err)=>{
    if(err) throw err
    console.log("Banco conectado com sucesso")
})

module.exports = {con}