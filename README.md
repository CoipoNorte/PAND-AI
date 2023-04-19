# Pand-ai

Un proyecto de JS que utiliza la API de WhatsApp junto a un chatbot, alojado en Fly.io, para la Universidad de Tarapacá, sería una aplicación que permitiría a los estudiantes interactuar con un chatbot a través de WhatsApp, proporcionando respuestas automáticas y facilitando la comunicación con la universidad.

## Hola, soy CoipoNorte! 👋

Me alegra que alguien este leyendo esto pues este proyecto nacio de un percance con una asignatura, basicamente fuimos expulsados de un grupo de trabajo y ahora estamos desarrollando esta API REST, estamos muy emocionados con esta oportunidad, esperamos puedas entender la documentacion, tratamos de dejar lo mas claro posible cada linea de codigo. Disfruta del proyecto!

atte: [@Christian Caceres](https://www.github.com/coiponorte)

## Installation

Puedes clonar el repositorio utilizando git.
```bash
  git clone https://github.com/CoipoNorte/PAND-AI
```
Luego puedes utilizar la powershell de Windows para instalar las dependencias de Node.js
```bash
  npm install express
```
```bash
  npm Install
```
Posterior a eso deberas instalar los comandos de Fly.io para poder hacer uso del servidor.
```bash
  powershell -Command "iwr https://fly.io/install.ps1 -useb | iex"
```
Ya finalizada la instalacion podras hacer uso de los comandos al reinicar la Terminal.

Para subir su proyecto deberas utilizar dos comandos.
```bash
  flyctl launch
```
```bash
  flyctl deployd
```
Recuerda cambiar a tus credenciales de META y Fly.io para no tener problemas pues los token caducan despues de 23 hrs.
## Documentation

Este cocumento fue realizado por uno de los programadores encargados de testear la API y su funcionamiento, se trata de una guia para poder instalar, comprender la creacion y ejecutar el proyecto de manera local. Tambien se detalla el testeo a traves de Postman y la identificacion de valores claves para la integracion con la API de WhatsApp de META.
[Documentation](https://docs.google.com/document/d/1vyC5cZOXWsAAHbduj-ibHxHdfdUy3SaB4C7dYt0avFg/edit?usp=sharing)

## Authors

- [@Christian Caceres](https://www.github.com/coiponorte)
- [@Jose LeBlanc](https://www.github.com/)
- [@Rodrigo Gonzales](https://www.github.com/)

