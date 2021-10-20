const socket = io('/chattings');

const getElementById = (id) => document.getElementById(id) || null;

const helloStrangerElement = getElementById('hello_stranger');
const chattingBoxElement = getElementById('chatting_box');
const formElement = getElementById('chat_form');

//* global socket handler
socket.on('user_connected', (username) => {
  console.log(`${username} connected`);
});

const drawHelloStranger = (username) =>
  (helloStrangerElement.innerText = `hello ${username} Stranger :)`);

function helloUser() {
  const username = prompt('What is your name?');

  socket.emit('new_user', username, (data) => {
    drawHelloStranger(data);
  });

  socket.on('hello_user', (data) => {
    console.log(data);
  });
}

function init() {
  helloUser();
}

init();
