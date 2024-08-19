import express from 'express'
import conexao from '../infra/conexao.js'

const app = express()

// indicar para o express ler body com json
app.use(express.json())

// Retornar o objeto por id
function buscarSelecaoPorId(id) {
    return selecoes.filter( selecao => selecao.id == id)
}
// pegar a posicao do index do elemento do array por id
function buscarIndexSelecao(id) {
    return selecoes.findIndex( selecao => selecao.id == id)
}

// Rotas
app.get('/selecoes', (req, res) => {
  //  res.status(200).send(selecoes)
  const sql = "SELECT * FROM selecoes;"
  conexao.query(sql, (erro, resultado) => {
    if(erro) {
        
        res.status(404).json({'erro': erro})

    } else {
        res.status(200).json(resultado)
      }
    })
});

app.get('/selecoes/:id', (req, res) => {
    res.json(buscarSelecaoPorId(req.params.id))
});

app.post('/selecoes', (req, res) => {
    selecoes.push(req.body)
    res.status(201).send('Seleção cadastrada com sucesso')
})
;
// Excluindo item por id
app.delete('/selecoes/:id', (req, res) => {
    let index = buscarIndexSelecao(req.params.id)
    selecoes.splice(index, 1)
    res.send(`Seleção com id ${req.params.id} excluida com sucesso`)
});

// Atualizando ítens da lista com o PUT
app.put('/selecoes/:id', (req, res) => {
    let index = buscarIndexSelecao(req.params.id)
    selecoes[index].selecao = req.body.selecao
    selecoes[index].grupo = req.body.grupo
    res.json(selecoes)
})

export default app