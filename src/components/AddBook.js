/* eslint-disable */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const [dataTitle, setTitle] = useState('');
  const [dataAuthor, setAuthor] = useState('');

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { id: uuidv4(), title: dataTitle, author: dataAuthor, category: ''};
    setTitle('');
    setAuthor('');
    if (dataTitle && dataAuthor) {
      dispatch(addBook(newBook));
    }
  };

  return (
    <div className="formContainer">
    <div className="horizontal-line" />
    <label className='label'>Add a new book</label>
      <form className="form" onSubmit={handleSubmit}>
        <input className="input" onChange={(e) => setTitle(e.target.value)} value={dataTitle} type="text" placeholder="Enter book title" />
        <input className="input" onChange={(e) => setAuthor(e.target.value)} value={dataAuthor} type="text" placeholder="Enter the authors name" />
        <button type="submit" className="buttonBlue">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
