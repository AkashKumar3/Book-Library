import { Provider } from "react-redux"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import { store } from "./store/store"
import { Outlet } from "react-router-dom"



function App() {

  return (
    <>
    <Provider store={store}>
    <Navbar/>
    <Outlet/>
    </Provider>
    </>
  )
}

export default App
