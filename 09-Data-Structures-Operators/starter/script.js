'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// console.log(flights.split('+'));

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replaceAll('_', ' ')} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(38);
  console.log(output);
}


const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};


// Data needed for first part of the section
const restaurant = {
  name1: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,


  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(`Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}  will be delivered to ${address} at ${time}`);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    // console.log(mainIngredient);
    // console.log(otherIngredients);
  }
};

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  // console.log(text);
  const rows = text.split('\n');
  console.log(rows);
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().split('_');
    const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
    console.log(`${output.padEnd(20)}${'✔'.repeat(i + 1)}`);
  }
});




// console.log('Jonas Schmedtmann'.split(' '));
// const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
// console.log(firstName, lastName);
// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const passenger = 'jessica ann smith davis';

// console.log(passenger[0 + 1]);
// const capitalize = function (passenger) {
//   //console.log(passenger);
//   for (let i in passenger) {
//     if (i < passenger.length - 1) {
//       passenger[i] === ' ' && passenger.replace(passenger[Number(i) + 1], passenger[Number(i) + 1].toUpperCase());
//     }
//     // passenger[i] === ' ' && console.log(passenger[i + 1]);
//     // passenger[i] === ' ' && passenger.replace(passenger[Number(i) + 1], passenger[Number(i) + 1].toUpperCase);
//   }
//   console.log('*************8', passenger);
// }
// const passenger1 = capitalize(passenger);
// console.log(passenger1);

//padding 
// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+').padEnd(35, '+'));
// console.log('Jonas'.padStart(25, '+').padEnd(30, '+'));

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// }

// console.log(maskCreditCard(579392832));
// console.log(maskCreditCard(43378463864647384));
// console.log(maskCreditCard('3347328907328917893021'));

// // Repeat
// const message2 = 'Bad weather... All Departues Delayed...';
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'🐱‍🐉'.repeat(n)}`);
// };
// planesInLine(5);
// planesInLine(3);
// planesInLine(12);


// const airline = 'Tap Air Portugal';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// // Fix capitalization in name
// const passenger = 'jOnAS'; // jonas
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // Comparing email
// const email = 'hello@jonas.io';
// const loginEmail = ' Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// // replacing

// const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('doo/', 'gate'));
// console.log(announcement.replace(/door/g, 'gate'));

// // Booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.startsWith('Airb'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the NEW AIrbus family');
// }

// Practice exercise
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('gun') || baggage.includes('knife')) {
//     console.log('You are NOT allowed on board');
//   } else {
//     console.log('Welcome aboard');
//   }
// }
// checkBaggage('I have a laptop, some Food and a pocket Knife')
//   ;
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);
// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got the middle seat 😉');
//   else console.log('You got lucky 😍');

// };


// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(new String('jonas'));
// console.log(typeof new String('jonas'));

// console.log(typeof new String('jonas').slice(1));



// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '� Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '� Substitution'],
//   [64, '� Yellow card'],
//   [69, '� Red card'],
//   [70, '� Substitution'],
//   [72, '� Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '� Yellow card'],
// ]);

// let events = [...gameEvents.values()];
// // console.log(events);
// events = [...new Set(events)];
// // console.log(events);
// gameEvents.delete(64);
// // console.log(gameEvents);

// console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);

// for (const [i, j] of [...gameEvents]) {
//   const half = i <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF]${i}: ${j}`);
// }


// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct👏'],
//   [false, 'Try again!'],
// ]);
// console.log(question);

// // Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// //Quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// // const answer = Number(prompt('Your answer'));
// // //console.log(question.get(answer));
// // console.log(question.get(question.get('correct') === answer));

// // Convert map to array
// console.log([...question]);
// console.log(question.entries());
// console.log([...question.keys()]);
// console.log([...question.values()]);

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest.set('Categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set('Open', 11).set('Close', 23).set(true, 'We are open :D').set(false, 'We are closed :(');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 21;
// console.log(rest.get(time < rest.get('Close') && time > rest.get('Open')));

// console.log(rest.has('Categories'));
// rest.delete(2);
// const arr = [1, 2];
// rest.set(arr, 'Test')
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));



// Property NAMES
// const properties = Object.keys(openingHours);
// // console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of Object.keys(openingHours)) {
//   openStr += `${day}, `;
// }
// // console.log(openStr);

// // Property VALUES 
// const values = Object.values(openingHours);
// // console.log(values);

// // Entire object
// // const { thu: {open, close}, fri, sat } = openingHours;
// // console.log(thu, fri, sat);
// // console.log(values1);
// const entries = Object.entries(openingHours);

// for (const [key, { open, close }] of entries) {
//   console.log(`OpeningHours on ${key} will open at ${open} and closes at ${close}`);
// console.log(key1, key2);
// };

// for (let i of Object.keys(openingHours)) {
//   for (let j, k of Object.keys(openingHours[i]), Object.values(openingHours[i])) {
//     console.log(j, k);
//   }
// }

// restaurant.openingHours && restaurant.openingHours.mon && console.log(restaurant.openingHours.mon.open);

// restaurant.openingHours && restaurant.openingHours.fri && console.log(restaurant.openingHours.fri.open);

// console.log(restaurant.openingHours.mon?.open);

// console.log(restaurant.openingHours?.mon?.open);

// // Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// // Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// // Arrays
// // const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
// const users = []
// console.log(users[0]?.name ?? 'User array empty');


// null ?? console.log('??');

// 0 || console.log('||');

// 0 && console.log('&&');
// restaurant.numGuests = 0;

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// const guests3 = restaurant.numGuests ?? 10;
// console.log(guests3);

// console.log("------OR-----");
// // Use ANY  data type, return ANY data type,
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log("----AND----");
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');

// console.log('Hello' && 23 && null && 'Jonas');

// // Practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('Mushrooms', 'Spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('Mushrooms', 'Spinach');




// Destructuring
// SPREAD, because on RIGHT  side of =
// const arr = [1, 2, ...[3, 4]];

// //REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// // console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// // console.log(pizza, risotto, otherFood);

// //Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// // console.log(weekdays);

// // 2) Functions 
// const add = function (...numbers) {
//   let sum = 0;
//   // console.log(typeof sum);
//   // console.log(typeof numbers);
//   var i = 0;
//   for (i of numbers) 
//     // console.log(typeof Number(i), i);
//     sum += Number(i);
//   }
//   // console.log(sum);
// }

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 arrys 
// const menu = [...restaurant.starterMenu, ...mainMenuCopy];
// console.log(menu);

// // Iterables: arrays, strings, maps, sets, NOT objects
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
// console.log(...str);

// // Real world example
// const ingredients = [
//   // prompt('Let\'s make pasta! Ingredient 1?'), prompt('Let\'s make pasta! Ingredient 2?'), prompt('Let\'s make pasta Ingredient 3?')
// ];
// restaurant.orderPasta(...ingredients);

// // Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name1 = 'Ristorante Roma';
// console.log(restaurantCopy.name1);
// console.log(restaurant.name1);
// const teluguItems = ['Biriyini', 'Roti', 'Meals'];
// restaurantCopy.starterMenu = [...teluguItems];
// console.log(restaurantCopy);
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// const [first, , second] = restaurant.categories;
// console.log(first, second);

// const [one, , [three, four]] = restaurant.categories;
// console.log(one, three, four);


// const [firstOne, secondOne] = restaurant.order(2, 0);
// console.log(firstOne, secondOne);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Vial del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'via del sole, 21',
//   starterIndex: 1
// });




// const { name1, openingHours, categories } = restaurant;

// console.log(name1, openingHours, categories);

// const { name1: restaurantName, openingHours: hours, categories: tags } = restaurant;
// console.log(restaurantName, hours, tags);

// // Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// // nested objects
// const { fri: { open: o, close: c } } = openingHours;

// console.log(o, c);


const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
// console.log(orderSet);

// console.log(new Set('Jonas'));

// console.log(orderSet.size);
// console.log(orderSet.has('Bread'));
// orderSet.add('Garlic Bread');
// orderSet.add('Garlic Bread');
// orderSet.delete('Risotto');
// // orderSet.clear();
// console.log(orderSet);
// for (const order of orderSet) console.log(order);

// // Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// // console.log(staff);
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);

// console.log(new Set('jonasschmedtmann').size);




// 1. 
// for (const [i, player] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${player}`);
// }

// // 2. 
// let odds = Object.values(game.odds);
// let average = 0;
// for (const value of odds) {
//   average += value;
// }
// average /= odds.length;
// console.log(average);

// // 3.
// for (const [key, value] of Object.entries(game.odds)) {
//   let teamStr = key === 'x' ? 'draw' : `victory ${game[key]}`;
//   console.log(`odd of ${teamStr} ${value}`);
// }

// let scorers = {};
// for (const i of [...game.scored]) {
//   // console.log(i);
//   let k = 0;
//   for (const j of [...game.scored]) {
//     i === j && k++;
//   }
//   // console.log(`${i}: ${k}`);
//   scorers[i] = k;
// }
// console.log(scorers);

// average /= game.odds.length;
  // console.log(average);

// const [players1, players2] = game.players;
// // console.log(typeof players1, players1);
// // console.log(typeof players2, players2);

// const bayernMunich = {
//   gk: players1[0],
//   fieldPlayers: [...players1[1]]
// };

// const borrussiaDortmund = {
//   gk: players2[0],
//   fieldPlayers: [...players2[1]]
// };
// // console.log(team1);
// // console.log(team2);

// const allPlayers = [...players1, ...players2];
// // console.log(allPlayers);

// const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// // console.log(playersFinal);
// const { team1, x: draw, team2 } = game.odds;
// // console.log(team1, draw, team2);

// const printGoals = function (...names) {
//   for (let i of names) {
//     let k = 0;
//     for (let j of [...game.scored]) {
//       i == j && k++;

//     }
//     console.log(i, k);
//   }
// };

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

// team1 < team2 ? console.log('team1 wins') : console.log('team2 wins');

