const express = require('express');
const { db } = require('./config/dbconfig.js')
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Praise The Sun');
});

// testando conexão com banco de dados no backend
app.get('/testdb', (req, res) => {
    const q = "SELECT * FROM personagens"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
            return res.json(data)
    })
});

app.listen(3000, () => {
    console.log('porta 3000 funcionando');
});
