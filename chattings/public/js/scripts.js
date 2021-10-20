const socket = io('/');

const getElementById = (id) => document.getElementById(id) || null;

const helloStrangerElement = getElementById('hello_stranger');
const chattingBoxElement = getElementById('chatting_box');
const formElement = getElementById('chat_form');

function helloUser() {
  const username = prompt('What is your name?');
  console.log('hello user');
  socket.emit('new_user', username, (data) => {
    console.log(`return data : ${data}`);
  });
  /* socket.on('hello_user', (data) => {
    console.log(`scripts.js : socket.on => ${data}`);
  }); */
  //console.log(username);
}

function init() {
  helloUser();
}

init();
