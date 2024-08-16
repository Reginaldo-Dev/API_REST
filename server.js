import app from './src/app.js'

import conexao from './infra/conexao.js' 

const PORT = 3000

// fazer a conexao

conexao.connect((erro) => {
    if(erro) {
        console.log(erro)
    } else {
        console.log("Conexao realizada com sucesso")
        // Escutando a porta
app.listen(PORT, () => {
    console.log(`Sevidor rodando no endereço http://localhost:${PORT}`)
})
    }
})


