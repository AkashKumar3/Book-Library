# BookLibrary

BookLibrary is a React-based application designed for managing a collection of books. It provides functionality to browse books, add new books, and view detailed information about each book. This project is built with modern tools and frameworks, including Vite, Tailwind CSS, and React Router.

## Features

- **Browse Books**: Explore a collection of books with intuitive navigation.
- **Add New Books**: Easily add books to the collection with a dedicated form.
- **View Book Details**: Get detailed information about individual books.
- **Responsive Design**: Optimized for various screen sizes using Tailwind CSS.

## Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js) or [yarn](https://yarnpkg.com/)

## Getting Started

Follow these steps to set up and run the project locally:

### 1. Clone the Repository

```bash
git clone <repository-url>
cd bookLibrary
```

### 2. Install Dependencies

Install the required dependencies using npm:

```bash
npm install
```

Or with yarn:

```bash
yarn install
```

### 3. Run the Development Server

Start the development server to preview the application locally:

```bash
npm run dev
```

Or with yarn:

```bash
yarn dev
```


## Project Structure

```plaintext
bookLibrary/
├── public/              # Public assets (e.g., images, icons)
├── src/                 # Source code
│   ├── assets/          # Static assets
│   ├── components/      # Reusable components (e.g., Navbar, BookCard)
│   ├── pages/           # Page-level components (e.g., HomePage, BrowseBooksPage)
│   ├── store/           # Redux store setup and slices
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── package.json         # Project metadata and dependencies
├── tailwind.config.js   # Tailwind CSS configuration
├── vite.config.js       # Vite configuration
└── README.md            # Project documentation
```

## Dependencies

- **React**: For building user interfaces
- **React Router DOM**: For handling routing
- **Tailwind CSS**: For styling
- **Lucide React**: For icons

## Acknowledgments

- Built By Akash Kuar.
