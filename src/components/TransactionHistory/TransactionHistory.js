import React from 'react';
import './TransactionHistory.css'
import PropTypes from 'prop-types'

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

TransactionHistory.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
}

export default TransactionHistory;