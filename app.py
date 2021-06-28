from flask import Flask, render_template
from flask_socketio import SocketIO
from werkzeug import debug
import os

import redis
import gevent
from flask_sockets import Sockets

app = Flask(__name__)

app.secret_key = os.environ.get("SECRET_KEY")

socketio = SocketIO(app)

@app.route('/')
def index():
    return render_template('index.html')

# server receives messages through the message 'route'
# sends the message to ALL clients connected....
@socketio.on('message')
def handle_message(data):
    print('received message: ' + data)
    socketio.emit('updateui', data)

if __name__ == '__main__':
    socketio.run(app)
