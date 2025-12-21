import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"

const Layout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <aside className={`hidden md:block  w-72 h-screen bg-black/40 text-white overflow-y-auto`}>
        <Sidebar/>
      </aside>
      <main className="flex-1 inset-0 overflow-y-auto p-4">
        <Outlet/>
      </main>
    </div>
  )
}

export default Layout