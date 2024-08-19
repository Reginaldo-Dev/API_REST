import app from 'server.js';



const PORT = 3306

// fazer a conexao

app.listen(PORT, () => {
    console.log(`Sevidor rodando no endereço http://localhost:${PORT}`)
})
