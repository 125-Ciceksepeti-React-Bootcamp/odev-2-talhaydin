import '../css/main.scss';

const container = document.querySelector('.container');
const arr = [];

class Animal {
  constructor(name, image, numberOfLegs) {
    this.name = name;
    this.image = image;
    this.numberOfLegs = numberOfLegs;
  }
}

class Dog extends Animal {
  constructor(name, image, numberOfLegs, age) {
    super(name, image, numberOfLegs);
    this.age = age;
  }
}

class Duck extends Animal {
  constructor(name, image, numberOfLegs, age) {
    super(name, image, numberOfLegs);
    this.age = age;
  }
}

let DOG_1 = new Dog(
  'Cash',
  'https://images.dog.ceo/breeds/kelpie/n02105412_7264.jpg',
  'Number of Legs: 4',
  'Age 4'
);

let DOG_2 = new Dog(
  'Milo',
  'https://images.dog.ceo/breeds/shiba/shiba-18.jpg',
  'Number of Legs: 4',
  'Age 11'
);

let DOG_3 = new Dog(
  'Petty',
  'https://images.dog.ceo/breeds/cattledog-australian/IMG_5481.jpg',
  'Number of Legs: 4',
  'Age 9'
);

let DOG_4 = new Dog(
  'Elsa',
  'https://random.dog/6b3100c1-34a0-4795-8de6-82da13eec2af.jpg',
  'Number of Legs: 4',
  'Age 2'
);

let DOG_5 = new Dog(
  'Tail',
  'https://random.dog/c17936bb-274a-4873-ac14-8b814f18b804.jpg',
  'Number of Legs: 4',
  'Age 9'
);

let DUCK_1 = new Duck(
  'Ducky',
  'https://random-d.uk/api/randomimg?t=1632496780749',
  'Number of Legs: 2',
  'Age 4'
);

let DUCK_2 = new Duck(
  'Sentinel',
  'https://random-d.uk/api/randomimg?t=16324967807',
  'Number of Legs: 2',
  'Age 11'
);

let DUCK_3 = new Duck(
  'Duff',
  'https://random-d.uk/api/randomimg?t=16324980749',
  'Number of Legs: 2',
  'Age: 8'
);

let DUCK_4 = new Duck(
  'Noot',
  'https://random-d.uk/api/randomimg?t=163496780749',
  'Number of Legs: 2',
  'Age: 3'
);

let DUCK_5 = new Duck(
  'Free',
  'https://random-d.uk/api/randomimg?t=163249670749',
  'Number of Legs: 2',
  'Age: 4'
);

arr.push(
  DOG_1,
  DOG_2,
  DOG_3,
  DOG_4,
  DOG_5,
  DUCK_1,
  DUCK_2,
  DUCK_3,
  DUCK_4,
  DUCK_5
);
arr.forEach((animal) => {
  const wrapEl = document.createElement('div');
  wrapEl.innerHTML = '';
  wrapEl.classList.add('card');
  container.appendChild(wrapEl);
  const imgEl = document.createElement('img');
  imgEl.setAttribute('src', animal.image);
  imgEl.classList.add('animalImage');
  wrapEl.appendChild(imgEl);
  const nameEl = document.createElement('h3');
  nameEl.innerHTML = animal.name;
  wrapEl.appendChild(nameEl);
  const ageEl = document.createElement('h4');
  ageEl.innerHTML = animal.age;
  wrapEl.appendChild(ageEl);
  const numberOfLegsEl = document.createElement('h5');
  numberOfLegsEl.innerHTML = animal.numberOfLegs;
  wrapEl.appendChild(numberOfLegsEl);
});
