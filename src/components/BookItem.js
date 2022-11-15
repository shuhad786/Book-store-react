import React from 'react';
import { useDispatch } from 'react-redux';
import { IoTrashBin } from 'react-icons/io5';
import { removeBook } from '../redux/books/books';

function BookItem(props) {
  const dispatch = useDispatch();
  const { title, author, id } = props;
  const deleteBook = (id) => {
    dispatch(removeBook(id))
  }

  return (
    <section className='displayBooks'>
        <p className='book'> Title: {title} </p>
        <p className='book'> Author: {author} </p>
        <button type='button' className='removeBtn' onClick={() => deleteBook(id)}><IoTrashBin /></button>
    </section>
  )
}

export default BookItem;