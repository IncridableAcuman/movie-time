import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import { Menu } from "lucide-react"

const Layout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <aside className={`hidden md:block  w-64 h-screen shadow-2xl bg-black/40 text-white overflow-y-auto shrink-0`}>
        <Sidebar />
      </aside>
      <div className="block md:hidden w-full h-16 bg-black/50 backdrop-blur-2xl text-white">
        <div className="flex items-center justify-between p-4">
          <img src="./netflix.png" alt="logo" className="w-16" />
          <button className="cursor-pointer hover:text-pink-800 transition duration-300">
            <Menu />
          </button>
        </div>
      </div>
      <main className="flex-1 min-h-screen inset-0 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout