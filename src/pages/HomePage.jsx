import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard';

export default function HomePage() {
  const { books } = useSelector(state => state.books);
  const categories = [...new Set(books.map(book => book.category))];
  const popularBooks = books.slice(0, 8);

  return (
    <div className="w-full min-h-screen px-6 py-8 bg-gradient-to-r from-indigo-800 to-purple-500">
      
      <section className="flex flex-col items-center mb-16">
        <h1 className="text-5xl font-extrabold text-white tracking-wide mb-6">
          Your Next Adventure Awaits
        </h1>
        <p className="text-lg text-white opacity-80 mb-10 max-w-lg text-center">
          Discover thousands of books across various genres. Immerse yourself in stories that will take you to new worlds.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 flex justify-center text-white">Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map(category => (
            <Link
              key={category}
              to={`/browse/${category.toLowerCase()}`}
              className="bg-white text-gray-800 p-4 rounded-lg text-center shadow-md hover:bg-indigo-700 hover:text-white transition-colors duration-300"
            >
              {category}
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6 flex justify-center text-white">Popular Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>
    </div>
  );
}
