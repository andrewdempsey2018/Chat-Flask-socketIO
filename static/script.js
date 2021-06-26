console.log("sanity check"); //make sure JS loaded

//create a socket on the client
let socket = io();

let form = document.getElementById('form');
let message = form.elements[1];
let username = form.elements[0];

let message_area = document.getElementById('message_area');

//user clicks submit button, socket sends the message to the server
form.addEventListener('submit', e => {
    e.preventDefault();
    console.log(message.value);
    socket.emit('message', username.value + ': ' + message.value);
    // TODO need to reset message field and leave name field intact after submit
});

socket.on('updateui', data => {
    message_area.innerHTML += data + '<br>';
})

