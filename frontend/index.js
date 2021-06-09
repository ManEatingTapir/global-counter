var socket = io("http://127.0.0.1:5000");

socket.on('connect', function() {
    socket.emit("update counter", false)
    socket.emit('my event', {data: 'I\'m connected!'});
});

socket.on("update counter", function(count){
    var myCounter = document.getElementById("counter");
    myCounter.textContent = String(count);
});

function clickEvent() {
    socket.emit("update counter", true);
}
