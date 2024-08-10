import app from './SRC/app.js'
const PORT = 3000


// Escutando a porta
app.listen(PORT, () => {
    console.log(`Sevidor rodando no endereço http://localhost:${PORT}`)
})

