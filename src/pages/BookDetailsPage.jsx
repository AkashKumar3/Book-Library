import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { Star, ArrowLeft } from 'lucide-react';

export default function BookDetailsPage() {
  const { id } = useParams();
  const { books } = useSelector(state => state.books);
  const book = books.find(b => b.id === parseInt(id));

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className=" bg-gradient-to-r from-indigo-800 to-purple-500 px-40 py-40">
      <Link to="/browse" className="flex items-center mb-6">
        <ArrowLeft size={20} />
        <span className="ml-2 font-bold">Back to Browse</span>
      </Link>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full p-2 border-r-8 object-cover md:w-48"
              src={book.imageUrl}
              alt={book.title}
            />
          </div>
          <div className="p-8">
            <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
            <p className="text-gray-600 text-xl mb-4">by {book.author}</p>
            <div className="flex items-center mb-4">
              <Star className="text-yellow-400" />
              <span className="ml-2 text-lg">{book.rating}</span>
            </div>
            <p className="text-gray-700 mb-4">{book.description}</p>
            <div className="inline-block bg-indigo-100 px-3 py-1 rounded-full text-indigo-800">
              {book.category}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}