import React from 'react';

const Transaction = ({ amount, day, hour, from, to, rate }) => {
  return (
    <li className="transaction">
      <span className="transaction__date">{day}</span>
      <span className="transaction__time">{hour}</span>
      <span className="transaction__assets"> {`${from}→${to}`} </span>
      <span className="transaction__rate">{rate}</span>
      <span className="transaction__amount">{new Intl.NumberFormat('en-GB').format(amount)}</span>
    </li>
  );
};

export default Transaction;
