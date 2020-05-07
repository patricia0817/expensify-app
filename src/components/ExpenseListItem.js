import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => {
  return (
    <div className='expense-list__item'>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      <div className='expense-list__item__content'>
        <p>{moment(createdAt).format('ll')}</p>
        <p>
          <b>$</b> {amount}
        </p>
      </div>
    </div>
  );
};

export default ExpenseListItem;
