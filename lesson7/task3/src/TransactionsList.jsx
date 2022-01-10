import React from 'react';
import Transaction from './Transaction.jsx';

const TransactionsList = props => {
  return (
    <>
      <ul className="transactions">
        {props.transactions.map(transaction => (
          <Transaction key={transaction.id} {...transaction} />
        ))}
      </ul>
    </>
  );
};

export default TransactionsList;
