import React from 'react';
import moment from 'moment';

const transaction = ({ time, from, to, rate, amount }) => {
  const date = moment(time).format('lll').split('');
  const month = date
    .splice(0, 3)
    .reverse()
    .reduce((symbol, acc) => acc + symbol);
  return (
    <li className="transaction">
      <span className="transaction__date">{new Date(time).getDate() + ' ' + month}</span>
      <span className="transaction__time">
        {`${new Date(time).getHours()}:${new Date().getMinutes()}`}
      </span>
      <span className="transaction__assets"> {`${from}→${to}`} </span>
      <span className="transaction__rate">{rate}</span>
      <span className="transaction__amount">{new Intl.NumberFormat('en-GB').format(amount)}</span>
    </li>
  );
};

export default transaction;
