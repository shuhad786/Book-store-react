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

BookItem.defaultProps = {
  title: 'title',
  author: 'author',
  id: 'id',
};

BookItem.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
};

export default BookItem;
