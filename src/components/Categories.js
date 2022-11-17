import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Category = () => {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.category);
  const [displayNone, setDisplayNone] = useState(null);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const btnStatus = () => {
    dispatch(checkStatus());
    setDisplayNone('displayNone');
    setIsButtonClicked(true);
  };

  return (
    <div className="category">
      {
        !isButtonClicked
          ? <button type="button" className={`button && ${displayNone}`} onClick={btnStatus}>Check status</button>
          : <p className="categoryError">{text}</p>
      }
    </div>
  );
};

export default Category;
