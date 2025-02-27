from flask import Flask, render_template
from flask_socketio import SocketIO

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
app.config['clicks'] = 0;
socketio = SocketIO(app, cors_allowed_origins="*")

@socketio.on("connect")
def handle_connect(msg):
    print(f"received connect")

@socketio.on('counter update')
def handle_counter_update(is_click):
    if is_click:
        app.config['clicks'] += 1
    socketio.emit('update', app.config['clicks'])

if __name__ == '__main__':
    socketio.run(app)

