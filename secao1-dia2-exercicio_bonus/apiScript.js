const body = document.querySelector('#body');

const button = document.createElement('button');
button.className = 'button';
button.innerText = 'Click for Joke';
body.appendChild(button);

const onScreenJoke = document.createElement('p');
  onScreenJoke.className = 'joke';
  body.appendChild(onScreenJoke);
// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' },
  };

  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => {
      const { joke } = data;
      onScreenJoke.innerText = joke;
      return joke;
    });

};
button.addEventListener('click', () => {
  fetchJoke();
  
});
// window.onload = () => fetchJoke();

