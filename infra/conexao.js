import mysql from 'mysql'

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    passaword: '1234',
    database: 'bdcopa'
})

conexao.connect()
export default conexao