from flask import Flask, render_template
from flask_socketio import SocketIO

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app, cors_allowed_origins="*")

@socketio.on("connect")
def handle_connect(msg):
    print(f"received connect")

@socketio.on('button')
def handle_custom(msg):
    print(msg)

if __name__ == '__main__':
    socketio.run(app)
