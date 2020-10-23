
const start = (client: any) => {

    client
      .sendText(`558399523548@c.us`, 'Enviar Mensagem')
      .then((result: string) => {
        console.log("Result: ", result);
      })
      .catch((erro: string) => {
        console.error("Error when sending: ", erro);
      });
    }



export default start;