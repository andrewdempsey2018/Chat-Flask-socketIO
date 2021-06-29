
# **Simple chat**
##### *A barebones implementation of Flask-socketIO*
___
![Screenshot of the app](static/images/screenshot.png)
*Here we see a conversation between three people in progress.*
##### Try it out
[Click here to launch the deployed app](https://chattychatty123.herokuapp.com/)
Open the app in two or more tabs or even different devices, enter an username and begin sending messages to all connected clients!

##### Intro

This is a very simple implementation of Flask-socketIO, based on their excellent [documentation](https://flask-socketio.readthedocs.io/en/latest/). To keep things simple, almost no styling has been added & no rooms have been implented.

#### How it works

#### Tech used

* Flask (for backend duties)
* Flask-SocketIO & SocketIO (for establishing socket endpoints on clients and the server)
* gunicorn (for running the Pyhon code on the server)
* gevent, greenlet (for efficiently managing messages going into and out of the server)
* gevent-websocket (for keeping a connection open between a client and the server)
* Python3

#### Code explanation

**Procfile**

The Procfile contains the following command:

`web: gunicorn -k gevent -w 1 app:app`

`web:` tells Heroku to expect external HTTP traffic

`gunicorn -k` run guncorn server with the -k argument (meaning that we will use a worker class with gunicorn) A worker class operates in its own thread seperate from our app. In this case, the worker 'gevent' will deal with incoming and outgoing messages.

`gevent -w 1` specifiy gevent as our worker class. The -w 1 argument specifies that we want to use one worker in this instance. Because of a limitation with gunicorn, we cannot specifiy any more than 1 worker. There are other options to using gevent detailed in the Flask-SocketIO  documentation.

`app:app` the first 'app' refers to our app.py file whilst the second 'app' refers to the actual instance of our app we create at runtime.

**app.py:**
handle\_message method 'emits' a string to all connected clients. The socketIO 'on()' decorator functions just like a standard Flask route. When the server detects a string 'message' it will trigger the handle\_message method

**index.html:**
This page grabs SocketIO from a CDN
Displays the text fields for username and message as well as a button to send a message. Scrollable Div for displaying messages.

**script.js**
It the creates a socket for the client to dispatch messages to the server

#### Deployment (local)

First, clone the repo. You'll then have to install all the requirements with `pip install -r requirements.txt`. Run the application with `python app.py`. This will spin up a server on your machine with a default port of 5000. Open at least two browser tabs and navigate them to `localhost:5000`. Now enter a username and start sending messages.

#### Deployment (web)

The information here relates to the Heroku hosting service.
* secret key