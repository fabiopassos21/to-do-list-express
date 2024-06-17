const express = require('express')

const app = express(); // package

app.get('/',(req,res)=>{
   res.send('<h1>Minha lista de tarefa</h1> :/');
}) // rota 

app.listen(3000,()=>{
    console.log("Servidor foi iniciado ") // start
})

app.get('/json',(red,res)=>{
    res.json({title:'Tarefa x',done: true})
})
