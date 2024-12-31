
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-indigo-800 to-purple-500 text-white shadow-xl">
      <div className="container mx-auto px-8 py-5">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-4 group">
            <span className="text-3xl font-serif font-extrabold text-yellow-200 tracking-wide">BookPadho</span>
          </Link>
          <div className="flex space-x-10">
            <Link to="/" className="nav-link group">
              <span className="mt-1 text-xl group-hover:text-yellow-200 transition-colors">Home</span>
            </Link>
            <Link to="/browse" className="nav-link group">
              <span className="mt-1 text-xl group-hover:text-yellow-200 transition-colors">Browse</span>
            </Link>
            <Link to="/add" className="nav-link group">
              <span className="mt-1 text-xl group-hover:text-yellow-200 transition-colors">Add Book</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
