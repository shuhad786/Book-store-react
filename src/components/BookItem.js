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
    <div className="displayBooks">
      <p className="book">
        Title: &nbsp;&nbsp;
        {title}
      </p>
      <p className="book">
        Author: &nbsp;&nbsp;
        {author}
      </p>
      <button type="button" className="button" onClick={() => deleteBook(id)}>Remove</button>
    </div>
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
