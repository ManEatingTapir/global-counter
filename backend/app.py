from flask import Flask, render_template
from flask_socketio import SocketIO

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
app.config["counter"] = 0
socketio = SocketIO(app, cors_allowed_origins="*")


@socketio.on("connect")
def handle_connect(msg):
    print(f"received connect")

@socketio.on("my event")
def handle_custom(msg):
    print("received a custom")
    print(msg)

@socketio.on("update counter")
def handle_update(is_change):
    if is_change:
        app.config["counter"] += 1
    socketio.emit("update counter", str(app.config["counter"]), broadcast = True)

if __name__ == '__main__':
    socketio.run(app, debug = True)
