'use client'
import Link from 'next/link'
import { Search, UserCircle, X, Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname=usePathname();

  useEffect(()=>{

    if(isOpen){
      document.body.style.overflow="hidden"
    } else{
      document.body.style.overflow="auto"
    }

  },[isOpen]);

  return (
    <nav className='fixed top-0 left-0 w-full bg-black/80   z-50'>
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 py-4">
        <h1 className='text-lg font-semibold cursor-pointer hover:text-pink-600 transition duration-300'>
          Kino<span className='text-pink-600 hover:text-white transition duration-300'>Vaqti.</span>
        </h1>
        {/* start */}
        <div className="hidden md:flex items-center gap-8">
          <Link href={"/"} className='hover:text-pink-600 transition-colors'>Asosiy</Link>
          <Link href={"/movie"} className='hover:text-pink-600 transition-colors'>Kino</Link>
          <Link href={"/series"} className='hover:text-pink-600 transition-colors'>Seriallar</Link>
          <Link href={"/cartoon"} className='hover:text-pink-600 transition-colors'>Multifilm</Link>
        </div>
        {/* end */}
        <div className="flex items-center gap-4">
          <Search />
          <UserCircle />
          <button onClick={() => setIsOpen(!isOpen)}
            className='md:hidden focus:outline-none'
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>
      {/* start */}
      {
        isOpen && (
          <div className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden" onClick={() => setIsOpen(false)}>

            <div className={`absolute right-0 top-0 h-full w-64 bg-gray-950 border-l border-l-gray-800 shadow-lg flex flex-col items-center p-6 space-y-6 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`} onClick={(e) => e.stopPropagation()} >
              <button onClick={() => setIsOpen(false)} className='self-end text-gray-400 hover:text-white transition duration-300 cursor-pointer'>
                <X />
              </button>
              <nav className="flex flex-col items-center space-y-6  w-full">
                <Link href={"/"}
                  onClick={() => setIsOpen(false)}
                  className={`${pathname==="/" ? "bg-pink-600 text-white" : "hover:bg-pink-600 hover:text-white"} 
                   w-full rounded-md transition duration-300 px-4 py-2 text-center`}>Home</Link>

                <Link href={"/movie"}
                  onClick={() => setIsOpen(false)}
                  className={`${pathname==="/movie" ? "bg-pink-600 text-white" : "hover:bg-pink-600 hover:text-white"} 
                   w-full rounded-md transition duration-300 px-4 py-2 text-center`}>Movie</Link>


                <Link href={"/series"}
                  onClick={() => setIsOpen(false)}
                  className={`${pathname==="/series" ? "bg-pink-600 text-white" : "hover:bg-pink-600 hover:text-white"} 
                   w-full rounded-md transition duration-300 px-4 py-2 text-center`}>Series</Link>


                <Link href={"/cartoon"}
                  onClick={() => setIsOpen(false)}
                  className={`${pathname==="/cartoon" ? "bg-pink-600 text-white" : "hover:bg-pink-600 hover:text-white"} 
                   w-full rounded-md transition duration-300 px-4 py-2 text-center`}>Cartoon</Link>

                  
              </nav>
            </div>
          </div>
        )
      }
      {/* end */}
    </nav>
  )
}

export default Navbar