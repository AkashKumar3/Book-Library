import { Link } from 'react-router-dom';
import { CloudOff, Home } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-800 to-purple-500 flex items-center justify-center  text-white">
      <div className="text-center p-8 bg-white rounded-3xl shadow-lg max-w-md mx-auto">
        <CloudOff className="mx-auto mb-6 text-6xl text-indigo-700" />
        <h1 className="text-7xl font-bold text-indigo-800 mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-6">
          Oops! The page you're looking for can't be found.
        </p>
        <Link
          to="/"
          className="inline-flex items-center space-x-3 bg-indigo-600 text-white px-8 py-4 rounded-full hover:bg-indigo-700 transition duration-300"
        >
          <Home size={20} />
          <span className="text-lg">Back to Home</span>
        </Link>
      </div>
    </div>
  );
}
