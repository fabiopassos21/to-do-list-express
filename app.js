const express = require('express');
const checkListyRouter = require('./src/routes/checklist')
const app = express(); // Inicializa o Express

app.use (express.json());

app.use('/checklist',checkListyRouter)
// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log("Servidor foi iniciado na porta 3000");
});
