'use strict';

/**
 * @param {object[]} users
 * @return {object}
 */
function usersCountByCity(users) {
  const usersInCity = {};
  users.forEach(user => {
    if (Object.prototype.hasOwnProperty.call(usersInCity, user.city)) {
      usersInCity[user.city] += 1;
    } else {
      usersInCity[user.city] = 1;
    }
  });
  return usersInCity;
}

// examples
const users = [
  {
    id: 888,
    name: 'Denis',
    age: 44,
    city: 'Kyiv',
  },
  {
    id: 333,
    name: 'Alex',
    age: 33,
    city: 'Lviv',
  },
  {
    id: 392,
    name: 'Nastya',
    age: 22,
    city: 'Kyiv',
  },
  {
    id: 123,
    name: 'Violetta',
    age: 15,
    city: 'Odesa',
  },
  {
    id: 640,
    name: 'Mykola',
    age: 31,
    city: 'Lviv',
  },
];

usersCountByCity(users); // ===> { 'Kyiv': 2, 'Lviv': 2, 'Odesa': 1 }
