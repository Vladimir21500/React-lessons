import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList.jsx';

const users = [
  {
    name: 'Tom',
    age: 18,
    id: 'id-1',
  },
  {
    name: 'Sara',
    age: 28,
    id: 'id-2',
  },
  {
    name: 'Scot',
    age: 18,
    id: 'id-3',
  },
  {
    name: 'Bob',
    age: 18,
    id: 'id-4',
  },
  {
    name: 'Valik',
    age: 38,
    id: 'id-5',
  },
  {
    name: 'Yan',
    age: 18,
    id: 'id-6',
  },
];

const rootElement = document.querySelector('#root');

ReactDOM.render(<UsersList users={users} />, rootElement);
