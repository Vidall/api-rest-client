import express from 'express';

const app = express();


app.get('/', (req, res) => {
    return res.send('ola dev')
})

app.listen(3000, () => {
    console.log('Backend executando')
})