import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"

const Layout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <aside className={`hidden md:block  w-64 h-screen shadow-2xl bg-black/40 text-white overflow-y-auto`}>
        <Sidebar/>
      </aside>
      <main className="flex-1 min-h-screen inset-0 overflow-y-auto p-4">
        <Navbar/>
        <Outlet/>
      </main>
    </div>
  )
}

export default Layout