const venom = require('venom-bot');

  venom.create().then((client: any) => start(client));

  function start(client: any) {
    client.onMessage((message: any) => {
      if (message.body === 'Hi' && message.isGroupMsg === false) {
        client
          .sendText(message.from, 'Welcome Venom 🕷')
          .then((result: any) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro: any) => {
            console.error('Error when sending: ', erro); //return object error
          });
      }
    });
  }



