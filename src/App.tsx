import { Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import { ToastContainer } from "react-toastify"

const App = () => {
  return (
    <div className="bg-gray-900 text-white">
    <ToastContainer/>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
      </Route>
    </Routes>
    </div>
  )
}

export default App