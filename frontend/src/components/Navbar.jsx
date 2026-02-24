import { UserCircle } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-around bg-black p-6 sticky z-40'>
      <div className="">
        <h1 className='text-lg font-semibold text-red-500'>MOVIE TIME</h1>
      </div>
      <div className="">
        <ul className='flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10'>
          <li className='cursor-pointer hover:text-red-500 transition duration-300'>Home</li>
          <li className='cursor-pointer hover:text-red-500 transition duration-300'>Movie</li>
          <li className='cursor-pointer hover:text-red-500 transition duration-300'>TV</li>
          <li className='cursor-pointer hover:text-red-500 transition duration-300'>Series</li>
        </ul>
      </div>
      <div className="text-red-500">
        <UserCircle size={28} />
      </div>
    </div>
  )
}

export default Navbar