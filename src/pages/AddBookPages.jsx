import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../store/bookSlice';
import { Book, Star, Image, User, BookType, FileText } from 'lucide-react';

export default function AddBookPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    description: '',
    rating: '',
    imageUrl: ''
  });

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = 'Title is required';
    if (!formData.author) newErrors.author = 'Author is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.description) newErrors.description = 'Description is required';
    if (!formData.rating || formData.rating < 0 || formData.rating > 5) {
      newErrors.rating = 'Rating must be between 0 and 5';
    }
    if (!formData.imageUrl) newErrors.imageUrl = 'Image URL is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(addBook({
        ...formData,
        rating: parseFloat(formData.rating)
      }));
      navigate('/browse');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const inputClass = (error) => `
    w-full px-6 py-4 rounded-xl bg-indigo-50 border
    ${error ? 'border-red-300 focus:border-red-500' : 'border-indigo-300 focus:border-purple-500'}
    focus:outline-none focus:ring-2 ${error ? 'focus:ring-red-200' : 'focus:ring-purple-200'}
    transition-colors
  `;

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-800 to-purple-500 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl shadow-lg p-10">
          <h1 className="text-4xl font-serif text-indigo-900 mb-8 flex items-center">
            <Book className="w-8 h-8 mr-3 text-purple-600" />
            Add New Book
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="form-group">
              <label className="form-label text-lg font-semibold text-indigo-800">
                <BookType className="w-6 h-6 text-purple-500" />
                Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className={inputClass(errors.title)}
                placeholder="Enter book title"
              />
              {errors.title && <p className="error-message text-red-500 mt-1">{errors.title}</p>}
            </div>

            <div className="form-group">
              <label className="form-label text-lg font-semibold text-indigo-800">
                <User className="w-6 h-6 text-purple-500" />
                Author
              </label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                className={inputClass(errors.author)}
                placeholder="Enter author name"
              />
              {errors.author && <p className="error-message text-red-500 mt-1">{errors.author}</p>}
            </div>

            <div className="form-group">
              <label className="form-label text-lg font-semibold text-indigo-800">
                <Book className="w-6 h-6 text-purple-500" />
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className={inputClass(errors.category)}
              >
                <option value="">Select a category</option>
                <option value="Fiction">Fiction</option>
                <option value="Non-Fiction">Non-Fiction</option>
                <option value="Sci-Fi">Sci-Fi</option>
              </select>
              {errors.category && <p className="error-message text-red-500 mt-1">{errors.category}</p>}
            </div>

            <div className="form-group">
              <label className="form-label text-lg font-semibold text-indigo-800">
                <FileText className="w-6 h-6 text-purple-500" />
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={5}
                className={inputClass(errors.description)}
                placeholder="Enter book description"
              />
              {errors.description && <p className="error-message text-red-500 mt-1">{errors.description}</p>}
            </div>

            <div className="form-group">
              <label className="form-label text-lg font-semibold text-indigo-800">
                <Star className="w-6 h-6 text-purple-500" />
                Rating (0-5)
              </label>
              <input
                type="number"
                name="rating"
                min="0"
                max="5"
                step="0.1"
                value={formData.rating}
                onChange={handleChange}
                className={inputClass(errors.rating)}
                placeholder="Enter rating"
              />
              {errors.rating && <p className="error-message text-red-500 mt-1">{errors.rating}</p>}
            </div>

            <div className="form-group">
              <label className="form-label text-lg font-semibold text-indigo-800">
                <Image className="w-6 h-6 text-purple-500" />
                Image URL
              </label>
              <input
                type="url"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                className={inputClass(errors.imageUrl)}
                placeholder="Enter image URL"
              />
              {errors.imageUrl && <p className="error-message text-red-500 mt-1">{errors.imageUrl}</p>}
            </div>

            <div className="flex justify-end pt-8">
              <button
                type="submit"
                className="inline-flex items-center space-x-3 bg-indigo-800 text-white px-10 py-4 rounded-xl
                          hover:bg-purple-500 transition-colors focus:outline-none focus:ring-2 
                          focus:ring-purple-500 focus:ring-offset-2"
              >
                <Book className="w-6 h-6" />
                <span className="text-lg">Add Book</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
