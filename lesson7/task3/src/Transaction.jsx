import React from 'react';
import moment from 'moment';

const Transaction = ({ time, from, to, rate, amount }) => {
  const momentDate = moment(new Date(time));
  const formatter = new Intl.NumberFormat('en-GB');

  return (
    <li className="transaction">
      <span className="transaction__date">{momentDate.format('DD MMM')}</span>
      <span className="transaction__time">{momentDate.format('hh:mm')}</span>
      <span className="transaction__assets"> {`${from} → ${to}`} </span>
      <span className="transaction__rate">{formatter.format(rate)}</span>
      <span className="transaction__amount">{formatter.format(amount)}</span>
    </li>
  );
};

export default Transaction;
