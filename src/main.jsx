import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import BrowseBooksPage from './pages/BrowseBooksPage.jsx'
import BookDetailsPage from './pages/BookDetailsPage.jsx'
import AddBookPage from './pages/AddBookPages.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'


const routing  = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path:"/",
        element: <HomePage/>
      },
      {
        path: "/browse",
        element: <BrowseBooksPage/>
      },
      {
        path: "/browse/:category",
        element: <BrowseBooksPage/>
      },
      {
        path:"/book/:id",
        element: <BookDetailsPage/>
      },
      {
        path:"/add",
        element:<AddBookPage/>
      },{
        path:"*",
        element: <NotFoundPage/>
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <RouterProvider router={routing}/>
  </StrictMode>,
)
