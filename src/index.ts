import express from 'express';
import routes from './routes'
import './database';


const app = express();

app.use(express.json());
app.use(routes)

app.get('/', (req, res) => {
    res.json({message: 'Hello World'});
})

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Servidor Iniciado na porta ${port}`);
});
