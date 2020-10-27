import React from 'react';
import './TransactionHistory.css'

const TransactionHistory = ({ items }) => {
  return (

    <table class="transaction-history">
      {items.map(item => (
      <thead>
        <tr id={item.id}>
          <th>{item.type}</th>
          <th>{item.amount}</th>
          <th>{item.currency}</th>
        </tr>
      </thead>
      ))}
    </table>
  );
};

export default TransactionHistory;