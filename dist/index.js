"use strict";
var venom = require('venom-bot');
venom.create().then(function (client) { return start(client); });
function start(client) {
    client.onMessage(function (message) {
        if (message.body === 'Hi' && message.isGroupMsg === false) {
            client
                .sendText(message.from, 'Welcome Venom 🕷')
                .then(function (result) {
                console.log('Result: ', result); //return object success
            })
                .catch(function (erro) {
                console.error('Error when sending: ', erro); //return object error
            });
        }
    });
}
