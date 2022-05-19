import style from './transaction-history.module.css';

import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
  const transaction = items.map(el => (
    <tr key={el.id}>
      <td>{el.type}</td>
      <td>{el.amount}</td>
      <td>{el.currency}</td>
    </tr>
  ));

  return (
    <table className={style.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>{transaction}</tbody>
    </table>
  );
};

export default TransactionHistory;

TransactionHistory.defaultProps = {
  items: [],
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
