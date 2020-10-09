class AuthenticateController {
  async login(req, res) {
    res.json('login realizado com sucesso');
  }
}

export default new AuthenticateController();
