const https = require("https");
const MetaToken = "EAAIjvGFqjmQBAEyHcJhecztMBlnpBRGlmVc0JzoWV1kguPAksicsQ5kE4zMi15mMfnduvkpbBtdM2GKWcDIBrY9Oh1RZC82spLYcmprS3rsYiD2TcfwSTbsZAHi8nNmYkLRvmKosB66Kvi51de3rZBkRi9aDoohOCnyWmJWebZBPTjiu3S8dEBtMKxsgCdLSU4ssjLlwXgZDZD";

function EnviarMensajeWhastpapp(texto, numero) {
    texto = texto.toLowerCase();

    if (texto == "1") {
        // Sobre la UTA
        var data = JSON.stringify({
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": numero,
            "type": "text",
            "text": {
                "preview_url": false,
                "body": "La Universidad de Tarapacá (UTA) es una institución de educación superior ubicada en la ciudad de Arica, Chile. La UTA se destaca por ser una universidad comprometida con la formación integral de sus estudiantes, fomentando el desarrollo de habilidades y competencias necesarias para su inserción en el mundo laboral. La universidad cuenta con una amplia oferta académica en diversas áreas del conocimiento y se destaca por su cuerpo docente altamente calificado y su infraestructura moderna y tecnológica. Además, la UTA se enfoca en la investigación científica y tecnológica, abordando problemáticas regionales y nacionales, y contribuyendo al desarrollo sustentable y al progreso social. En resumen, la UTA es una excelente opción para aquellos que buscan una educación de calidad, innovadora y comprometida con el futuro de la región y del país."
            }
        });
    } else if (texto == "2") {
        // Ubicacion de la UTA Saucache
        var data = JSON.stringify({
            "messaging_product": "whatsapp",
            "to": numero,
            "type": "location",
            "location": {
                "latitude": "-18.48795808023103",
                "longitude": "-70.2948862034343",
                "name": "Arica, Arica y Parinacota",
                "address": "18 de Septiembre 2222"
            }
        });
    } else if (texto == "3") {
        // Documento PDF, de Intranet de preferencia
        var data = JSON.stringify({
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": numero,
            "type": "document",
            "document": {
                "link": "https://admision.uta.cl/wp-content/uploads/2021/03/22075-Ingenieria-Civil-Computacion.pdf",
                "caption": "Documento PDF"
            }
        });
    } else if (texto == "4") {
        // Audio MP3·
        var data = JSON.stringify({
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": numero,
            "type": "audio",
            "audio": {
                "link": "https://download.samplelib.com/mp3/sample-15s.mp3"
            }
        });
    } else if (texto == "5") {
        // Enlace a Youtube
        var data = JSON.stringify({
            "messaging_product": "whatsapp",
            "to": numero,
            "type": "text",
            "text": {
                "preview_url": true,
                "body": "Miralo ya! https://www.youtube.com/watch?v=KcfdKiF1LNw&t=1s&ab_channel=UniversidaddeTarapac%C3%A1"
            }
        });
    } else if (texto == "6") {
        // Deberia hacer mas que solo un texto
        var data = JSON.stringify({
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": numero,
            "type": "text",
            "text": {
                "preview_url": false,
                "body": "🤝 En breve alguien se pondra en contacto contigo. 🐼"
            }
        });
    } else if (texto == "7") {
        // Entregar el Horario (Tambien podria ser un PDF)
        var data = JSON.stringify({
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": numero,
            "type": "text",
            "text": {
                "preview_url": false,
                "body": "📅 Horario de Atención : Lunes a Viernes. \n🕜 Horario : 9:00 am a 14:45 pm 🐼"
            }
        });
    } else if (texto.includes("gracias")) {
        // Gracias :D
        var data = JSON.stringify({
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": numero,
            "type": "text",
            "text": {
                "preview_url": false,
                "body": "Gracias a ti por contactarme 🐼"
            }
        });
    } else if (texto.includes("adios") || texto.includes("bye") || texto.includes("nos vemos") || texto.includes("chao")) {
        // Despedida :(
        var data = JSON.stringify({
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": numero,
            "type": "text",
            "text": {
                "preview_url": false,
                "body": "Hasta la próxima 🐼"
            }
        });
    } else {
        // Menu de Opciones
        var data = JSON.stringify({
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": numero,
            "type": "text",
            "text": {
                "preview_url": false,
                "body": "🐼 Hola, ¿En qué puedo ayudarte?\n \n📌Por favor, ingresa un número #️⃣ para recibir información.\n \n1️⃣. Información de la UTA. ❔\n2️⃣. Ubicación del Saucache. 📍\n3️⃣. Plan de Estudio ICCI. 📄\n4️⃣. Música para informáticos. 🎧\n5️⃣. Video promocional. ⏯️\n6️⃣. Contáctanos. 🙋‍♂️\n7️⃣. Horario de Atención. 🕜" 
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
            Authorization :"Bearer " + MetaToken
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
