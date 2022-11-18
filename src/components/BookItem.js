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
      <div className="book-start">
        <p className="grey-text-1">Action</p>
        <p className="book-title">
          {title}
        </p>
        <p className="book-author">
          {author}
        </p>
        <ul className="buttonOrder">
          <button type="button" className="buttonClear">Comments</button>
          <div className="vertical-line" />
          <button type="button" className="buttonClear">Edit</button>
          <div className="vertical-line" />
          <button type="button" className="buttonClear" onClick={() => deleteBook(id)}>Remove</button>
        </ul>
      </div>
      <div className="book-right-end">
        <div className="rectangle" />
        <div>
          <p className="black-text">43%</p>
          <p className="grey-text">completed</p>
        </div>
        <span className="vertical-line-2" />
        <div className="book-right-end-2">
          <p className="grey-text-2">CURRENT CHARPTER</p>
          <p className="black-text-2">New charpter: &quot;Charpter 1&quot;</p>
          <button type="button" className="buttonBlue2">UPDATE PROGRESS</button>
        </div>
      </div>
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
