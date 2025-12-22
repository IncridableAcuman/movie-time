import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import { Menu, X } from "lucide-react"
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from "react";

const Layout = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex h-screen overflow-hidden">

      <div className="block md:hidden fixed top-0 w-full h-16 bg-black/50 backdrop-blur-md opacity-80">
        <div className="flex items-center justify-between p-3">
          <img src="./netflix.png" alt="logo" className="w-16" />
          <button className="cursor-pointer hover:text-pink-600 transition duration-300"
           onClick={()=>setOpen(true)}>
            <Menu />
          </button>
        </div>
      </div>

      {open && (
        <>
          <AnimatePresence
          >
            <motion.div 
            initial={{opacity:0}}
            animate={{opacity:0.4}}
            exit={{opacity:0}}
            className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={()=>setOpen(false)} />
            <motion.aside
            initial={{x:'100%'}}
            animate={{x:0}}
            exit={{x:'100%'}}
            transition={{type:'spring',stiffness:260,damping:25}}

             className="fixed top-0 right-0 h-screen w-64 bg-gray-900 z-50 text-white md:hidden">

            <div className="flex justify-start p-4">
              <X className="cursor-pointer hover:text-pink-600 transition duration-300" onClick={()=>setOpen(false)} />
            </div>

              <Sidebar />
            </motion.aside>
          </AnimatePresence>
        </>
      )}


      <aside className={`hidden md:block  w-64 h-screen shadow-2xl bg-black/40 text-white overflow-y-auto shrink-0`}>
        <Sidebar />
      </aside>

      <main className="flex-1 min-h-screen inset-0 overflow-y-auto">
        <Outlet />
      </main>

    </div>
  )
}

export default Layout