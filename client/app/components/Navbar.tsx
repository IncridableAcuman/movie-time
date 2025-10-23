import Link from 'next/link'
import {Search, UserCircle} from 'lucide-react';

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 w-full flex items-center justify-between p-4 sm:px-6 md:px-8 lg:px-10 z-50 bg-black'>
      <h1 className='text-lg font-semibold'>Movie<span className='text-pink-800'>Time.</span></h1>
      <div className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        <Link href={"/"}>Home</Link>
        <Link href={"/movie"}>Movie</Link>
        <Link href={"/series"}>Series</Link>
        <Link href={"/cartoon"}>Cartoon</Link>
      </div>
      <div className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        <Search/>
        <UserCircle/>
      </div>
    </div>
  )
}

export default Navbar