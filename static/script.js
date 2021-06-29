//create a socket on the client
let socket = io();

let message = document.getElementById('messageField');
let username = document.getElementById('username');
let sendButton = document.getElementById('sendButton');

let message_area = document.getElementById('message_area');

//user clicks submit button, socket sends the message to the server
sendButton.addEventListener('click', e => {
    e.preventDefault();
    console.log(message.value);
    socket.emit('message', username.value + ': ' + message.value);
    message.value = "";
});

socket.on('updateui', data => {
    message_area.innerHTML += data + '<br>';
})

