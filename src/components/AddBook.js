/* eslint-disable */
import React from 'react';
// import { IoTrashBin } from "react-icons/io5";

const AddBook = (props) => {
  const { title, author, id } = props
  return (
    <div className='formContainer' >
      <form className='form'>
        <label>Add a new book</label>
        <input className='input' value={title} type='text' placeholder='Enter book title'/>
        <input className='input' value={author} type='text' placeholder='Enter the authors name'/>
        <button id={id} type='submit' className='submitBtn'>Submit</button>
      </form>
    </div>
  )
}

export default AddBook;