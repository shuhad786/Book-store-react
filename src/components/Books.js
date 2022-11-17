import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookItem from './BookItem';
import AddBook from './AddBook';
import { getBook } from '../redux/books/books';

const Books = () => {
  const data = useSelector((state) => state.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBook());
  }, [dispatch]);

  return (
    <div className="displayContainer">
      {
      data
        && data.map((item) => (
          <BookItem
            key={item.id}
            title={item.title}
            author={item.author}
            id={item.id}
          />
        ))
      }
      <AddBook />
    </div>
  );
};

export default Books;
