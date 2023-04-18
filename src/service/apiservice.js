const https = require("https");

function EnviarMensajeWhastpapp(texto, numero) {
    texto = texto.toLowerCase();

    if (texto.includes("hola")) {
        var data = JSON.stringify({
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": numero,
            "type": "text",
            "text": {
                "preview_url": false,
                "body": "Hola Estudiante, Bienvenido.\n¿En que puedo ayudarte?"
            }
        });
    }

    const options = {
        host : "graph.facebook.com",
        path : "/v16.0/117675621292408/messages",
        method : "POST",
        body : data,
        headers : {
            "Content-Type" : "application/json",
            Authorization :"Bearer EAAIjvGFqjmQBAOUGgwALDVmUCyd37j7wsgwu9rfRMwHNUWP8JUGmthK0iitQZAjzqgqqFi059ZCkZBXJ7bLR2NgztWlTMzLl1dALQGAi2kZCKBtVxCfeGXt6GTSR9zQ0MAaewTt4H3nsSIntFzcwtTxTn3MX05XcpZCpb5laht9FLPaxir4ZCAMTnZBN2KiJe8bZCybx3jrgCgZDZD"
        }
    };

    const req = https.request(options, res => {
        res.on("data", d => {
            process.stdout.write(d);
        });
    });

    req.write(data);
    req.end();
}

module.exports = {
    EnviarMensajeWhastpapp
}