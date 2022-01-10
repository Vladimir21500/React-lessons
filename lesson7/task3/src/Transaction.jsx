import React from 'react';
import moment from 'moment';

const formatter = new Intl.NumberFormat('en-GB');

const Transaction = ({ time, from, to, rate, amount }) => {
  return (
    <li className="transaction">
      <span className="transaction__date">{moment(new Date(time)).format('DD MMM')}</span>
      <span className="transaction__time">{moment(new Date(time)).format('hh:mm')}</span>
      <span className="transaction__assets"> {`${from} → ${to}`} </span>
      <span className="transaction__rate">{formatter.format(rate)}</span>
      <span className="transaction__amount">{formatter.format(amount)}</span>
    </li>
  );
};

export default Transaction;
