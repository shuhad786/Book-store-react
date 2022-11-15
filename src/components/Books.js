import { useSelector } from 'react-redux';
import BookItem from './BookItem';
import AddBook from './AddBook';

const Books = () => {
  const data = useSelector((state) => state.book);

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
