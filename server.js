import app from './src/app.js'

const PORT = 3000

// fazer a conexao

app.listen(PORT, () => {
    console.log(`Sevidor rodando no endereço http://localhost:${PORT}`)
})
