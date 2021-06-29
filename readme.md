# Simple chat

### A barebones implementation of Flask-socketIO

![Screenshot of the app](static/images/screenshot.png)

### Try it out

[Click here to launch the deployed app](https://chattychatty123.herokuapp.com/)

Open the app in two or more tabs or even different devices, enter an username and begin sending messages to all connected clients!

#### Intro

This is a very simple implementation of Flask-socketIO, based on their excellent [documentation](https://flask-socketio.readthedocs.io/en/latest/). To keep things simple, almost no styling has been added.

#### How it works

### Overview

## Tech used

* Flask (for backend duties)
* Flask-SocketIO & SocketIO (for establishing endpoints on clients and the server)
* gunicorn (for running the Pyhon code on the server)
* gevent
* gevent-websocket
* greenlet (, required by gevent)

### Code explanation

## Procfile

## app.py

## index.html

## script.js

#### Deployment (local)

# NOTE. Python3 required

First, clone the repo. You'll then have to install all the requirements with `pip install -r requirements.txt`. Run the application with `python app.py`. This will spin up a server on your machine with a default port of 5000. Open at least two browser tabs and navigate them to `localhost:5000`. Now enter a username and start sending messages.

#### Deployment (web)

The information here relates to the Heroku hosting service.

need to set secret key

