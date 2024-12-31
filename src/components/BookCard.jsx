import { Star, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BookCard({ book }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="relative">
        <img 
          src={book.imageUrl} 
          alt={book.title}
          className="w-full h-56 object-cover"
        />
        <div className="absolute top-0 right-0 m-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">
          {book.category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold mb-2 text-gray-800">{book.title}</h3>
        <p className="text-gray-600 mb-3">by {book.author}</p>
        <div className="flex items-center mb-4">
          <Star className="text-yellow-500 fill-current" size={18} />
          <span className="ml-2 text-gray-700">{book.rating}</span>
        </div>
        <Link 
          to={`/book/${book.id}`}
          className="inline-flex items-center space-x-2 bg-indigo-800 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors"
        >
          <BookOpen size={18} />
          <span>Read More</span>
        </Link>
      </div>
    </div>
  );
}
