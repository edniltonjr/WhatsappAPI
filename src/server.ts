import express from 'express';
require('dotenv').config();
const app = express();

const port = process.env.PORT || 3000

app.listen(() => {
    console.log(`Server Started on port ${port} `)
})

app.get('/', (req, res) => {
    res.json('OK')
})