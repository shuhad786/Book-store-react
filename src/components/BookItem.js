import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const BookItem = (props) => {
  const dispatch = useDispatch();
  const { title, author, id } = props;
  const deleteBook = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <section className="displayBooks">
      <p className="book">
        {' '}
        Title:
        {title}
      </p>
      <p className="book">
        {' '}
        Author:
        {author}
      </p>
      <button type="button" className="removeBtn" onClick={() => deleteBook(id)}>Remove</button>
    </section>
  );
};

BookItem.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default BookItem;
