/* eslint-disable */
import React from 'react';
import { checkStatus } from '../redux/categories/categories';
import { useDispatch, useSelector } from 'react-redux';

const Category = () => {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.category)

  const btnStatus = () => {
    dispatch(checkStatus())
  };

  return (
    <div className='category'>
      <button className='statusBtn' onClick={btnStatus}>Check status</button>
      <p className='book'>{text}</p>
    </div>
  )
};

export default Category;