//Array  of greetings//
const greetings = [
  'Merry Christmas! Wishing you all the happiness in the world.',
  'May Santa bring you all the best presents. Merry Christmas!',
  'I hope your holiday is full of love, peace and joy!',
  'Happy Holidays!',
  'Have a magical and blissful Christmas.',
];

const javaGreeting = document.querySelector('.merry-christmas');
const getGreeting = document.querySelector('.greeting');

javaGreeting.addEventListener('click', () => {
  //map - change letters to uppercase//
  const uppercaseGreeting = greetings.map((item) => {
    return item.toUpperCase();
  });
  //Event listener of random colors on h1:an//
  function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  }

  document.addEventListener('mouseover', function () {
    document.body.style.color = randomColor();
  });

  document
    .querySelector('.merry-christmas')
    .addEventListener('mouseover', (event) => {
      event.target.style.fill = randomColor();
    });

  //Event listener of random greetings from array//
  const randomElement =
    uppercaseGreeting[Math.floor(Math.random() * uppercaseGreeting.length)];
  getGreeting.innerHTML = randomElement;
});

const moveSanta = document.querySelector('.santa-claus');
const moveSnowman = document.querySelector('.snow-man');
const moveReindeers = document.querySelector('.reindeers');

//Event listeners of moving items//
window.addEventListener('keypress', function (event) {
  moveSanta.classList.toggle('move-santa-claus');
  moveReindeers.classList.toggle('move-reindeers');
  moveSnowman.classList.toggle('move-snowman');
});

//Event listener of playing music//
const music = document.querySelector('.audio');
window.addEventListener('click', (event) => {
  music.play();
});
