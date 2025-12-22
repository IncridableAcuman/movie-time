import { Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import { ToastContainer } from "react-toastify"
import Movies from "./pages/Movies"
import Tv from "./pages/Tv"
import Series from "./pages/Series"
import Kids from "./pages/Kids"

const App = () => {
  return (
    <div className="bg-gray-900 text-white">
    <ToastContainer/>
    <Routes >
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="movies" element={<Movies/>} />
        <Route path="tv" element={<Tv/>} />
        <Route path="series" element={<Series/>} />
        <Route path="kids" element={<Kids/>} />
      </Route>
    </Routes>
    </div>
  )
}

export default App