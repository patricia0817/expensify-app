//Object destructuring
// const person = {
//   name: 'Patricia',
//   age: 30,
//   location: {
//     city: 'Cluj-Napoca',
//     temp: 16,
//   },
// };

// const { name = 'Anonymus', age } = person;
// const { city, temp: temperature } = person.location;

// console.log(`${name} is ${age}`);
// console.log(`Is ${temperature} in ${city}`);

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin',
//   },
// };

// const { name: publisherName = 'Self Published' } = book.publisher;
// console.log(`${publisherName}`);

//Array destructuring
const address = [
  '1299 S Juniper Street',
  'Philadelphia',
  'Pennsylvania',
  '19147',
];

const [, , state = 'New York'] = address;

console.log(`You are in ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);
