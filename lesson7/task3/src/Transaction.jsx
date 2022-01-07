import React from 'react';
import moment from 'moment';

const transaction = ({ time, from, to, rate, amount }) => {
  return (
    <li className="transaction">
      <span className="transaction__date">{moment(new Date(time)).format('DD MMM')}</span>
      <span className="transaction__time">{moment(new Date(time)).format('hh:mm')}</span>
      <span className="transaction__assets"> {`${from} → ${to}`} </span>
      <span className="transaction__rate">{rate}</span>
      <span className="transaction__amount">{new Intl.NumberFormat('en-GB').format(amount)}</span>
    </li>
  );
};

export default transaction;
