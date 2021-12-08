//Array  of greetings//
const greetings = [
  'Merry Christmas! Wishing you all the happiness in the world.',
  'May Santa bring you all the best presents. Merry Christmas!',
  'I hope your holiday is full of love, peace and joy!',
  'Happy Holidays!',
  'Have a magical and blissful Christmas.',
];

//Event listener of random greetings from array//
const javaGreeting = document.querySelector('.merry-christmas');
const getGreeting = document.querySelector('.greeting');

javaGreeting.addEventListener('click', () => {
  //map - change letters to uppercse//
  const uppercaseGreeting = greetings.map((item) => {
    return item.toUpperCase();
  });

  const randomElement =
    uppercaseGreeting[Math.floor(Math.random() * uppercaseGreeting.length)];
  getGreeting.innerHTML = randomElement;
});

//Event listeners on keypress//
const moveSanta = document.querySelector('.moving-santa');
const moveSnowman = document.querySelector('.snow-man');
const moveReindeers = document.querySelector('.reindeers');

window.addEventListener('keypress', function (event) {
  moveSanta.classList.toggle('move');
  moveReindeers.classList.toggle('move-reindeers');
  moveSnowman.classList.toggle('move-snowman');
});
