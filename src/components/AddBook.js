import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuidv4';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const [dataTitle, setTitle] = useState('');
  const [dataAuthor, setAuthor] = useState('');

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { id: uuidv4(), title: dataTitle, author: dataAuthor }
    setTitle('');
    setAuthor('');
    dispatch(addBook(newBook));
  };

  return (
    <div className="formContainer" >
      <form className="form" onSubmit={handleSubmit}>
        <label>Add a new book</label>
        <input className="input" onChange={(e) => setTitle(e.target.value)} value={ dataTitle } type="text" placeholder="Enter book title"/>
        <input className="input" onChange={(e) => setAuthor(e.target.value)} value={ dataAuthor } type="text" placeholder="Enter the authors name"/>
        <button type="submit" className="submitBtn">Submit</button>
      </form>
    </div>
  );
};

export default AddBook;
