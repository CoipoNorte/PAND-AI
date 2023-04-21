# Pand-ai

Un proyecto de JS que utiliza la API de WhatsApp junto a un chatbot, alojado en Fly.io, para la Universidad de Tarapacá, sería una aplicación que permitiría a los estudiantes interactuar con un chatbot a través de WhatsApp, proporcionando respuestas automáticas y facilitando la comunicación con la universidad.

## Hola, soy CoipoNorte! 👋

Me alegra que alguien esté leyendo esto, pues, este proyecto nació de un percance con una asignatura, básicamente fuimos expulsados de un grupo de trabajo y ahora estamos desarrollando esta API REST, estamos muy emocionados con esta oportunidad, esperamos puedas entender la documentación, tratamos de dejar lo más claro posible cada línea de código. ¡Disfruta de nuestro proyecto!

atte: [@Christian Caceres](https://www.github.com/coiponorte)

## Instalación

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
Posterior a eso deberás instalar los comandos de Fly.io para poder hacer uso del servidor.
```bash
  powershell -Command "iwr https://fly.io/install.ps1 -useb | iex"
```
Ya finalizada la instalación podrás hacer uso de los comandos al reiniciar la Terminal.

Para subir su proyecto deberás utilizar dos comandos.
```bash
  flyctl launch
```
```bash
  flyctl deployd
```
Recuerda cambiar a tus credenciales de META y Fly.io para no tener problemas, pues, los tokens caducan después de 23 horas.
## Documentación

Este documento fue realizado por uno de los programadores encargados de testear la API y su funcionamiento, se trata de una guía para poder instalar, comprender la creación y ejecutar el proyecto de manera local. También se detalla el testeo a través de Postman y la identificación de valores claves para la integración con la API de WhatsApp de META.

[Documentation](https://docs.google.com/document/d/1vyC5cZOXWsAAHbduj-ibHxHdfdUy3SaB4C7dYt0avFg/edit?usp=sharing)

## Autores

- [@Christian Caceres](https://www.github.com/coiponorte)
- [@Jose LeBlanc](https://www.github.com/)
- [@Rodrigo Gonzales](https://www.github.com/)

----------------------------------------------------------

PAND-AI
PAND-AI logo

Este proyecto es una plataforma educativa en línea para el aprendizaje de la inteligencia artificial y la ciencia de datos. Ofrecemos cursos en línea de alta calidad para ayudar a las personas a aprender habilidades importantes en el campo de la IA y la ciencia de datos.

Tecnologías utilizadas
Python
TensorFlow
Scikit-learn
Pandas
NumPy
Matplotlib
Flask
HTML/CSS/JavaScript
Cómo empezar
Para comenzar a utilizar PAND-AI, siga los siguientes pasos:

Clone el repositorio de GitHub en su máquina local utilizando el siguiente comando en su terminal:
bash
Copy code
git clone https://github.com/CoipoNorte/PAND-AI.git
Asegúrese de tener instalado Python en su máquina. Puede descargar Python aquí.

Instale las dependencias necesarias usando el siguiente comando:

Copy code
pip install -r requirements.txt
Ejecute la aplicación utilizando el siguiente comando:
Copy code
python app.py
Abra su navegador web y visite http://localhost:5000 para ver la plataforma PAND-AI.
Funcionalidades
PAND-AI cuenta con las siguientes funcionalidades:

Registro e inicio de sesión de usuario.
Cursos en línea con video-aulas y ejercicios prácticos.
Evaluación automática de los ejercicios prácticos.
Sistema de puntajes y logros para motivar al usuario.
Foro de discusión para cada curso.
Sección de recursos adicionales.

