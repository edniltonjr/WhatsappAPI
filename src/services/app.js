import cors from "cors";
import express from "express";
import routes from "../routes/router";

class App {
  constructor() {
    // iniciando o express
    this.server = express();
    // iniciando os middlewares
    this.middlewares();
    // iniciando as rotas
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
  }

  routes() {
    this.server.use("/api", routes);
  }
}

export default new App().server;
