import express from  'express'
const app = express()

// mock == Termo utilizado para mokar dados

const selecoes = [
    {id: 1, selecao: 'Brasil', grupo: 'G'},
    {id: 2, selecao: 'Suiça', grupo: 'G'},
    {id: 3, selecao: 'Sérvia', grupo: 'G'},
    {id: 4, selecao: 'Camarões', grupo: 'G'},
]

// crincdo rota padrão ou raiz
app.get('/', (req, res) => {
    res.send('Só os perseverantes alcançam os objetivos traçados')
})

app.get('/selecoes', (req, res) => {
    res.status(200).send(selecoes)

})

export default app