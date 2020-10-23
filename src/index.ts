import express from 'express';
import routes from './routes'
import './database';


const app = express();

app.use(express.json());
app.use("/api", routes);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Servidor Iniciado na porta ${port}`);
});
